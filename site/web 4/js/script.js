//Open Menu Mobile 
  document.querySelector(".mobile-menu").addEventListener('click', function () {
      document.querySelector(".menu-mobile").classList.add("active");
      window.addEventListener("wheel",preventDefault, { passive: false});
  });

  document.querySelector(".menu-close").addEventListener('click', function () {
      document.querySelector(".menu-mobile").classList.remove("active");
      window.removeEventListener("wheel",preventDefault);
  });
  function preventDefault (event) {
    event.preventDefault();
  }
//End of Open Menu Mobile

//Show Content Menu
  document.querySelector("#show-1").addEventListener('click', function () {
      document.querySelector("#content-1").classList.toggle("active");
  });

  document.querySelector("#show-2").addEventListener('click', function () {
      document.querySelector("#content-2").classList.toggle("active");
  });

  document.querySelector("#show-3").addEventListener('click', function () {
      document.querySelector("#content-3").classList.toggle("active");
  });
//End of Show Content Menu

//Show list Cart
  document.querySelector(".cart").addEventListener('mouseenter', function () {
    document.querySelector(".cart-list").classList.add("active");
  });

  document.querySelector(".cart-list").addEventListener('mouseleave', function () {
    document.querySelector(".cart-list").classList.remove("active");
  });
//End of Show list Categories

//Show list Categories
  document.querySelector("#categories").addEventListener('mouseenter', function () {
    document.querySelector(".list-categories").classList.add("active");
  });

  document.querySelector(".list-categories").addEventListener('mouseleave', function () {
    document.querySelector(".list-categories").classList.remove("active");
  });
//End of Show list Categories

//Slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',

  autoplay: {
    delay: 10000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
//End of Slider

//Start of gallery
document.querySelector("#show-4").addEventListener('mouseover', function () {
  document.querySelector("#product-1").classList.add("active");
});
document.querySelector("#product-1").addEventListener('mouseleave', function () {
  document.querySelector("#product-1").classList.remove("active");
});

document.querySelector("#show-5").addEventListener('mouseover', function () {
  document.querySelector("#product-2").classList.add("active");
});
document.querySelector("#product-2").addEventListener('mouseleave', function () {
  document.querySelector("#product-2").classList.remove("active");
});

document.querySelector("#show-6").addEventListener('mouseover', function () {
  document.querySelector("#product-3").classList.add("active");
});
document.querySelector("#product-3").addEventListener('mouseleave', function () {
  document.querySelector("#product-3").classList.remove("active");
});

document.querySelector("#show-7").addEventListener('mouseover', function () {
  document.querySelector("#product-4").classList.add("active");
});
document.querySelector("#product-4").addEventListener('mouseleave', function () {
  document.querySelector("#product-4").classList.remove("active");
});

document.querySelector("#show-8").addEventListener('mouseover', function () {
  document.querySelector("#product-5").classList.add("active");
});
document.querySelector("#product-5").addEventListener('mouseleave', function () {
  document.querySelector("#product-5").classList.remove("active");
});

document.querySelector("#show-9").addEventListener('mouseover', function () {
  document.querySelector("#product-6").classList.add("active");
});
document.querySelector("#product-6").addEventListener('mouseleave', function () {
  document.querySelector("#product-6").classList.remove("active");
});
//End of gallery

//Start of group
document.querySelector("#show-10").addEventListener('mouseover', function () {
  document.querySelector("#group-1").classList.add("active");
  document.querySelector("#show-10").classList.add("active");
});
document.querySelector("#show-10").addEventListener('mouseleave', function () {
  document.querySelector("#group-1").classList.remove("active");
  document.querySelector("#show-10").classList.remove("active");
});
document.querySelector("#show-10").onclick = function () {
  window.location.href = "index.html";
};

document.querySelector("#show-11").addEventListener('mouseover', function () {
  document.querySelector("#group-2").classList.add("active");
  document.querySelector("#show-11").classList.add("active");
});
document.querySelector("#show-11").addEventListener('mouseleave', function () {
  document.querySelector("#group-2").classList.remove("active");
  document.querySelector("#show-11").classList.remove("active");
});
document.querySelector("#show-11").onclick = function () {
  window.location.href = "index.html";
};

document.querySelector("#show-12").addEventListener('mouseover', function () {
  document.querySelector("#group-3").classList.add("active");
  document.querySelector("#show-12").classList.add("active");
});
document.querySelector("#show-12").addEventListener('mouseleave', function () {
  document.querySelector("#group-3").classList.remove("active");
  document.querySelector("#show-12").classList.remove("active");
});
document.querySelector("#show-12").onclick = function () {
  window.location.href = "index.html";
};

document.querySelector("#show-13").addEventListener('mouseover', function () {
  document.querySelector("#group-4").classList.add("active");
  document.querySelector("#show-13").classList.add("active");
});
document.querySelector("#show-13").addEventListener('mouseleave', function () {
  document.querySelector("#group-4").classList.remove("active");
  document.querySelector("#show-13").classList.remove("active");
});
document.querySelector("#show-13").onclick = function () {
  window.location.href = "index.html";
};
//End of group