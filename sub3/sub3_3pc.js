// 헤더 메뉴바
window.onload = function () {
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const wrap = document.getElementById("wrap");

    menuIcon.addEventListener("click", function () {
      // 햄버거 바를 클릭할 때마다 헤더가 나타났다가 사라졌다가 함
      if (wrap.style.right === "0px") {
        wrap.style.right = "-300%";
      } else {
        wrap.style.right = "0";
      }
    });
  });
};

// 서브 메뉴
window.onload = function () {
  // JavaScript
  function clickToShowSubMenu() {
    const subMenu = document.querySelector(".big_menu .sub_menu");

    if (subMenu.style.opacity === "0" || subMenu.style.opacity === "") {
      subMenu.style.opacity = "1"; // 클릭하면 나타나게 합니다.
    } else {
      subMenu.style.opacity = "0"; // 또 클릭하면 숨깁니다.
    }
  }

  function applyMenuBehavior() {
    const menuButton = document.querySelector(".story_menu_down");
    const subMenu = document.querySelector(".big_menu .sub_menu");

    if (window.innerWidth < 1200) {
      menuButton.addEventListener("click", clickToShowSubMenu);
      subMenu.style.transition = "none"; // 모바일 버전에서는 transition 없이 적용
    } else {
      menuButton.addEventListener("mouseenter", function () {
        subMenu.style.opacity = "1"; // 데스크탑 버전에서 호버하면 나타나게 합니다.
      });
      menuButton.addEventListener("mouseleave", function () {
        subMenu.style.opacity = "0"; // 데스크탑 버전에서 호버를 벗어나면 숨깁니다.
      });
    }
  }

  applyMenuBehavior(); // 페이지 로딩 시 적용

  window.addEventListener("resize", applyMenuBehavior); // 윈도우 크기 변경 시 적용
};

// 이전, 다음 버튼
// Update button text content based on window width
function updateButtonText() {
  const windowWidth = window.innerWidth;
  const buttonB = document.getElementById("changingTextB");
  const buttonF = document.getElementById("changingTextF");

  if (buttonB && buttonF) {
    if (windowWidth >= 1200) {
      buttonB.textContent = "우수작 보러가기";
      buttonF.textContent = "최우수작 보러가기";
    } else {
      buttonB.textContent = "이전";
      buttonF.textContent = "다음";
    }
  }
}

// Function to handle the update and resize events
function handleUpdateButtonText() {
  updateButtonText();
}

// Attach event listeners for update on load and resize
window.addEventListener("load", handleUpdateButtonText);
window.addEventListener("resize", handleUpdateButtonText);

// footer
document.addEventListener("DOMContentLoaded", function () {
  var contentSection = document.getElementById("content");
  var backButton = document.querySelector(".btn_top");

  // Function to show or hide the back-to-top button based on scroll position
  function toggleBackButton() {
    if (window.scrollY > contentSection.offsetTop) {
      backButton.classList.add("show");
    } else {
      backButton.classList.remove("show");
    }
  }

  // Show or hide the button on initial load
  toggleBackButton();

  // Scroll event listener to show or hide the button
  window.addEventListener("scroll", toggleBackButton);

  // Function to fix the button at the bottom of the viewport
  function fixButtonPosition() {
    var windowHeight = window.innerHeight;
    var buttonHeight = backButton.offsetHeight;

    if (
      window.scrollY + windowHeight >
      document.body.clientHeight - buttonHeight
    ) {
      backButton.style.bottom =
        windowHeight - (document.body.clientHeight - window.scrollY) + "px";
    } else {
      backButton.style.bottom = "2rem"; // Adjust this value based on your layout
    }
  }

  // Fix the button position on initial load
  fixButtonPosition();

  // Scroll event listener to fix the button position
  window.addEventListener("scroll", fixButtonPosition);

  // Scroll to the top when the button is clicked
  backButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// footer
document.addEventListener("DOMContentLoaded", function () {
  var contentSection = document.getElementById("content");
  var backButton = document.querySelector(".btn_top");

  function toggleBackButton() {
    if (window.scrollY > contentSection.offsetTop) {
      backButton.classList.add("show");
    } else {
      backButton.classList.remove("show");
    }
  }

  function fixButtonPosition() {
    var windowHeight = window.innerHeight;
    var buttonHeight = backButton.offsetHeight;

    if (
      window.scrollY + windowHeight >
      document.body.clientHeight - buttonHeight
    ) {
      backButton.style.position = "absolute";
      backButton.style.bottom = "-92rem";
    } else {
      backButton.style.position = "fixed";
      backButton.style.bottom = "2rem";
    }
  }

  toggleBackButton();
  fixButtonPosition();

  window.addEventListener("scroll", function () {
    toggleBackButton();
    fixButtonPosition();
  });

  backButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
