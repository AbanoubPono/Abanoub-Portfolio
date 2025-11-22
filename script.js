// 1️⃣ فتح واتساب عند الضغط على زر "Hire Me"
document.getElementById('hireBtn').addEventListener('click', () => {
  window.open('https://wa.me/201228105398', '_blank');
});

// 2️⃣ النزول للقسم "Contact" عند الضغط على زر "Contact Me"
document.getElementById('hireNow').addEventListener('click', () => {
  window.location.href = '#contact';
  document.querySelector('#contact input[name=name]').focus();
});

// 3️⃣ إعداد تأخير الحركة لكل عنصر لديه class "fade-up"
document.querySelectorAll('.fade-up').forEach((el, i) => {
  el.style.animationDelay = (i * 80) + 'ms';
});

// 4️⃣ تحميل السيرة الذاتية
function downloadCV() {
  const cvUrl = './Abanoub_CV.pdf'; // رابط ملف الـ CV
  const a = document.createElement('a'); // إنشاء عنصر رابط
  a.href = cvUrl;
  a.download = 'Abanoub_Yousry_CV.pdf'; // اسم الملف عند التحميل
  document.body.appendChild(a); // إضافة الرابط للجسم
  a.click(); // تنفيذ التحميل تلقائيًا
  a.remove(); // إزالة العنصر بعد التحميل
}

// 5️⃣ سكرول ناعم للروابط داخل الصفحة
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault(); // منع السلوك الافتراضي للروابط
    const id = a.getAttribute('href').slice(1); // الحصول على اسم الـ id
    const el = document.getElementById(id);
    if (!el) return; // إذا العنصر غير موجود
    el.scrollIntoView({ behavior: 'smooth', block: 'center' }); // النزول بسلاسة
  });
});
