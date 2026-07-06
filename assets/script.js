// ---------- Mobile nav toggle ----------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // footer year
  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ---------- Age Calculator ----------
function calcAge(){
  const dobInput = document.getElementById('dob');
  const atInput = document.getElementById('atdate');
  const out = document.getElementById('age-result');
  if (!dobInput.value){ out.textContent = 'জন্ম তারিখ দিন।'; out.classList.add('show'); return; }
  const dob = new Date(dobInput.value);
  const at = atInput.value ? new Date(atInput.value) : new Date();
  let years = at.getFullYear() - dob.getFullYear();
  let months = at.getMonth() - dob.getMonth();
  let days = at.getDate() - dob.getDate();
  if (days < 0){
    months -= 1;
    const prevMonth = new Date(at.getFullYear(), at.getMonth(), 0).getDate();
    days += prevMonth;
  }
  if (months < 0){ years -= 1; months += 12; }
  out.textContent = `বয়স: ${years} বছর ${months} মাস ${days} দিন`;
  out.classList.add('show');
}

// ---------- BMI Calculator ----------
function calcBMI(){
  const h = parseFloat(document.getElementById('height').value);
  const w = parseFloat(document.getElementById('weight').value);
  const out = document.getElementById('bmi-result');
  if (!h || !w){ out.textContent = 'উচ্চতা ও ওজন দিন।'; out.classList.add('show'); return; }
  const hm = h / 100;
  const bmi = (w / (hm * hm)).toFixed(1);
  let cat = 'স্বাভাবিক';
  if (bmi < 18.5) cat = 'কম ওজন';
  else if (bmi >= 25 && bmi < 30) cat = 'অতিরিক্ত ওজন';
  else if (bmi >= 30) cat = 'ওবেসিটি';
  out.textContent = `BMI: ${bmi} — ${cat}`;
  out.classList.add('show');
}

// ---------- Simple English -> Bangla digit/date converter ----------
const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
function toBanglaDigits(str){
  return String(str).replace(/[0-9]/g, d => bnDigits[d]);
}
function convertDate(){
  const dateInput = document.getElementById('dateconv');
  const out = document.getElementById('date-result');
  if (!dateInput.value){ out.textContent = 'তারিখ দিন।'; out.classList.add('show'); return; }
  const d = new Date(dateInput.value);
  const months = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
  const banglaStr = `${toBanglaDigits(d.getDate())} ${months[d.getMonth()]}, ${toBanglaDigits(d.getFullYear())}`;
  out.textContent = banglaStr;
  out.classList.add('show');
}

// ---------- Unit converter (length) ----------
const lengthFactors = { m:1, km:1000, cm:0.01, mm:0.001, mile:1609.34, ft:0.3048, inch:0.0254 };
function convertUnit(){
  const val = parseFloat(document.getElementById('unit-value').value);
  const from = document.getElementById('unit-from').value;
  const to = document.getElementById('unit-to').value;
  const out = document.getElementById('unit-result');
  if (isNaN(val)){ out.textContent = 'মান দিন।'; out.classList.add('show'); return; }
  const meters = val * lengthFactors[from];
  const result = meters / lengthFactors[to];
  out.textContent = `${val} ${from} = ${result.toFixed(4)} ${to}`;
  out.classList.add('show');
}

// ---------- Fake auth form handlers (front-end demo only) ----------
function handleAuthDemo(e, msg){
  e.preventDefault();
  const notice = document.getElementById('form-notice');
  if (notice){
    notice.textContent = msg;
    notice.style.display = 'block';
  }
}
