# e-Studio

itlancerbd.com এর আদলে ফিচার-সমৃদ্ধ, ভিন্ন থিমের একটি স্ট্যাটিক ওয়েবসাইট। বিশুদ্ধ HTML/CSS/JS দিয়ে তৈরি — কোনো বিল্ড টুল বা ব্যাকএন্ড ছাড়াই GitHub Pages-এ সরাসরি হোস্ট করা যায়।

## ফিচার তালিকা
- হোমপেজ (হিরো, স্ট্যাটস, কুইক-অ্যাক্সেস টুলস)
- চাকরি (jobs.html) ও ভর্তি (admission.html) আপডেট লিস্টিং
- সিভি/সার্টিফিকেট/গ্রাফিক্স ফরমেট লাইব্রেরি (formats.html)
- সফটওয়্যার তথ্য পেজ (software.html)
- ফটো স্টুডিও টুলস পেজ (photo-studio.html)
- কার্যকর ক্যালকুলেটর: বয়স, BMI, তারিখ কনভার্টার, একক কনভার্টার (tools.html)
- ক্যাটাগরিভিত্তিক লিংক ডিরেক্টরি (links.html)
- প্যাকেজ/প্রাইসিং + FAQ (packages.html)
- ব্লগ লিস্টিং (blog.html)
- লগইন/রেজিস্টার ফর্ম (ফ্রন্টএন্ড ডেমো, login.html / register.html)
- About ও Contact পেজ
- রেসপনসিভ ডিজাইন (মোবাইল হ্যামবার্গার মেনু সহ)

> লগইন/রেজিস্টার ও কন্টাক্ট ফর্ম বর্তমানে ফ্রন্টএন্ড ডেমো — সত্যিকারের ইউজার অথেনটিকেশন/ইমেইল পাঠানোর জন্য একটি ব্যাকএন্ড (Firebase, Supabase, PHP, Node.js ইত্যাদি) যুক্ত করতে হবে।

## GitHub Pages-এ পাবলিশ করার পদ্ধতি (কোনো কোডিং/টার্মিনাল লাগবে না)

1. https://github.com -এ লগইন করুন এবং **New repository** ক্লিক করুন।
2. রিপোজিটরির নাম দিন, যেমন `e-studio` — Public সিলেক্ট করে **Create repository** ক্লিক করুন।
3. রিপোর ভেতরে **"uploading an existing file"** লিংকে ক্লিক করুন।
4. এই ফোল্ডারের ভেতরের **সব ফাইল ও ফোল্ডার** (index.html, jobs.html, assets/ ইত্যাদি) টেনে এনে (drag & drop) আপলোড করুন, তারপর **Commit changes** ক্লিক করুন।
5. রিপোর **Settings → Pages**-এ যান। "Branch" এর নিচে `main` সিলেক্ট করে **Save** করুন।
6. ১-২ মিনিট পর উপরে একটি লিংক দেখাবে, যেমন:
   `https://<your-username>.github.io/e-studio/`
   এই লিংকেই আপনার সাইট লাইভ হয়ে যাবে।

### টার্মিনাল দিয়ে করতে চাইলে (বিকল্প পদ্ধতি)
```bash
cd e-studio
git init
git add .
git commit -m "Initial commit: e-Studio site"
git branch -M main
git remote add origin https://github.com/<your-username>/e-studio.git
git push -u origin main
```
তারপর উপরের ৫ নম্বর স্টেপ অনুসরণ করুন।

## ফাইল স্ট্রাকচার
```
e-studio/
├── index.html
├── jobs.html
├── admission.html
├── formats.html
├── software.html
├── tools.html
├── photo-studio.html
├── links.html
├── packages.html
├── blog.html
├── login.html
├── register.html
├── about.html
├── contact.html
├── assets/
│   ├── style.css
│   ├── script.js
│   └── footer.js
└── README.md
```

## থিম
- ব্যাকগ্রাউন্ড: সেজ-গ্রিন পেপার টোন (#EEF2EA)
- অ্যাকসেন্ট: সিগন্যাল অ্যামবার (#F0A202) + ডিপ টিল (#0E6E55)
- ফন্ট: Space Grotesk (হেডিং), Inter (বডি), JetBrains Mono (নাম্বার/ডেটা), Noto Sans Bengali (বাংলা টেক্সট)
- সিগনেচার এলিমেন্ট: ফিল্ম-স্ট্রিপ স্প্রকেট-হোল ডিভাইডার — "স্টুডিও" থিমের সাথে সামঞ্জস্যপূর্ণ
