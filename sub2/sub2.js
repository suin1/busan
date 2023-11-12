const iconBoxs = document.querySelectorAll(".icon_box");

const options = {
  root: null,
  rootMargin: "10px",
  threshold: 0.7,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("on");
      // 관찰할 필요가 없으므로 관찰을 중지합니다.
      observer.unobserve(entry.target);
    }
  });
}, options);

iconBoxs.forEach((iconBox) => {
  observer.observe(iconBox);
});


$('.header-include').load('header.html', function () {
  $('header h1').click(function () {
    alert('hi');
  });
});
$('.footer-include').load('footer.html');
$('header h1').click(function () {
  alert('Hello');
});