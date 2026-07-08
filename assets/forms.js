// ==========================================================================
// e-Studio — ফর্ম সাবমিশন হ্যান্ডলার (Google Sheet ব্যাকএন্ডে পাঠায়)
// ==========================================================================

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file) { resolve(""); return; }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function showNotice(el, msg, isError) {
  if (!el) { alert(msg); return; }
  el.textContent = msg;
  el.style.display = "block";
  el.style.background = isError ? "#fbe1dc" : "var(--accent-2-soft)";
  el.style.color = isError ? "#8a2e1f" : "var(--accent-ink)";
}

/**
 * formEl      : <form> এলিমেন্ট
 * formType    : "register" | "contact" | "nid-upload"
 * fields      : { name, email, phone, message, mobile ... } — সাধারণ টেক্সট ফিল্ড
 * fileInputEl : (ঐচ্ছিক) file input, দিলে ছবি base64 করে পাঠানো হবে
 */
async function submitFormToSheet(formEl, formType, fields, fileInputEl) {
  const notice = formEl.querySelector(".notice") ||
                 (formEl.parentElement ? formEl.parentElement.querySelector(".notice") : null);
  const submitBtn = formEl.querySelector('button[type="submit"]');

  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.indexOf("PASTE_YOUR") !== -1) {
    showNotice(notice, "⚠️ এখনো ব্যাকএন্ড যুক্ত করা হয়নি। assets/config.js ফাইলে Web App URL বসান (গাইড দেখুন)।", true);
    return;
  }

  const originalText = submitBtn ? submitBtn.textContent : "";
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "পাঠানো হচ্ছে..."; }

  try {
    const fd = new FormData();
    fd.append("formType", formType);
    for (const key in fields) fd.append(key, fields[key] ?? "");

    if (fileInputEl && fileInputEl.files && fileInputEl.files[0]) {
      const file = fileInputEl.files[0];
      const base64 = await fileToBase64(file);
      fd.append("imageBase64", base64);
      fd.append("imageName", file.name);
    }

    // Apps Script CORS-সীমাবদ্ধতার কারণে no-cors ব্যবহার করা হচ্ছে,
    // তাই রেসপন্স পড়া যাবে না — কিন্তু ডেটা ঠিকই শীটে জমা হয়ে যাবে।
    await fetch(APPS_SCRIPT_URL, { method: "POST", mode: "no-cors", body: fd });

    showNotice(notice, "✅ সফলভাবে জমা হয়েছে! ধন্যবাদ।", false);
    formEl.reset();
    const preview = formEl.querySelector(".file-preview");
    if (preview) preview.style.display = "none";

  } catch (err) {
    showNotice(notice, "❌ কিছু একটা সমস্যা হয়েছে, একটু পর আবার চেষ্টা করুন।", true);
    console.error(err);
  } finally {
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
  }
}

// ছবি সিলেক্ট করলে প্রিভিউ দেখানোর ছোট্ট হেল্পার
function wireFilePreview(fileInputId, previewId) {
  const input = document.getElementById(fileInputId);
  const preview = document.getElementById(previewId);
  if (!input || !preview) return;
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) { preview.style.display = "none"; return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  });
}
