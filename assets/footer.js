document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('site-footer');
  if (!mount) return;
  mount.innerHTML = `
    <div class="container footer-grid">
      <div>
        <a href="index.html" class="brand"><img src="assets/logo.svg" alt="e-Studio logo" class="mark"> e-Studio</a>
        <p style="margin-top:14px;max-width:280px;">চাকরি, ভর্তি, ফরমেট, ফটো স্টুডিও টুলস্‌ ও প্রয়োজনীয় ক্যালকুলেটর — সব একসাথে e-Studio-তে।</p>
        <div class="social-row">
          <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">f</a>
          <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">▶</a>
          <a href="https://wa.me/8800000000" target="_blank" rel="noopener" aria-label="WhatsApp">☎</a>
        </div>
      </div>
      <div>
        <h4>কুইক লিংক</h4>
        <ul>
          <li><a href="jobs.html">চাকরি</a></li>
          <li><a href="admission.html">ভর্তি</a></li>
          <li><a href="formats.html">ফরমেট</a></li>
          <li><a href="tools.html">টুলস্‌</a></li>
          <li><a href="photo-studio.html">ফটো স্টুডিও</a></li>
        </ul>
      </div>
      <div>
        <h4>কোম্পানি</h4>
        <ul>
          <li><a href="about.html">আমাদের সম্পর্কে</a></li>
          <li><a href="packages.html">প্যাকেজ</a></li>
          <li><a href="blog.html">ব্লগ</a></li>
          <li><a href="contact.html">যোগাযোগ</a></li>
          <li><a href="contact.html">প্রাইভেসি পলিসি</a></li>
        </ul>
      </div>
      <div>
        <h4>যুক্ত হোন</h4>
        <ul>
          <li><span class="muted">📞 ০১৭XXXXXXXX (৮AM–১১PM)</span></li>
          <li><span class="muted">✉️ info@e-studio.example</span></li>
          <li><a href="register.html">বিনামূল্যে নিবন্ধন</a></li>
        </ul>
      </div>
    </div>
    <div class="sprocket-rule"></div>
    <div class="container footer-bottom">
      <span>© <span id="year"></span> e-Studio. সর্বস্বত্ব সংরক্ষিত।</span>
      <span class="muted">তৈরি হয়েছে একটি ডিজিটাল স্টুডিওর ভাবনা থেকে 🎞️</span>
    </div>
  `;
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
