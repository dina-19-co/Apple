let img2 = document.getElementsByClassName("img2")[0];
let img3 = document.getElementsByClassName("img3")[0];
let img4 = document.getElementsByClassName("img4")[0];
let img5 = document.getElementsByClassName("img5")[0];
let img6 = document.getElementsByClassName("img6")[0];
let img7 = document.getElementsByClassName("img7")[0];


img2.style.boxShadow = "0 0 10px red";
img3.style.boxShadow = "0 0 10px Yellow ";
img4.style.boxShadow = "0 0 10px Orange ";
img5.style.boxShadow = "0 0 10px green";
img6.style.boxShadow = "0 0 10px Pink ";
img7.style.boxShadow = "0 0 10px black";



// 1. تجيب كل الأزرار اللي IDs بتاعتهم بتبدأ بـ 'but' (لكن لأن عندك IDs محددة ممكن تجيبهم بالتحديد)
// هجيبهم كلهم مرة واحدة باستخدام IDs اللي انت محددها:
// استدعاء أزرار الشراء
const buttons = [
  document.getElementById('but1'),
  document.getElementById('but2'),
  document.getElementById('but3'),
  document.getElementById('but4'),
  document.getElementById('but5'),
  document.getElementById('but6'),
];

// استدعاء الفورم والرسالة اللي هتظهر بعد الإرسال
let iform = document.getElementById("form1");
const message = document.getElementById('message'); // تأكد إن في عنصر span أو div بالـ id ده في HTML

// لما يضغط المستخدم على أي زرار من أزرار الشراء
buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    iform.style.display = "block";           // إظهار الفورم
    message.textContent = "";                 // مسح أي رسالة قديمة
    iform.scrollIntoView({ behavior: "smooth" }); // سكرول للفورم بسلاسة
  });
});

// استدعاء الفورم
const form = document.getElementById('form1');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // يمنع إعادة تحميل الصفحة عند الإرسال

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if(response.ok) {
      message.textContent = "تم التسجيل بنجاح، شكرًا لك!";
      form.reset(); // تفريغ الحقول
    } else {
      message.textContent = "حدث خطأ، حاول مرة أخرى.";
    }
  }).catch(error => {
    message.textContent = "حدث خطأ، حاول مرة أخرى.";
  });
});



window.addEventListener("load", function () {
  setTimeout(() => {
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
      img.classList.add('visible');
    });
  }, 300); // نص ثانية
});


window.addEventListener("load", function () {
  setTimeout(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 150); // يخلي كل عنصر يظهر بعد اللي قبله بشوية
    });
  }, 500); // يبدأ بعد نص ثانية من تحميل الصفحة
});


