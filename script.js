$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // //video switching script for video background in home section
  // var videos = [
  //   "videos/video1.mp4",
  //   // "videos/an-accountant-working-on-a-laptop-with-financial.mov",
  //   // "videos/social-media-icon-with-neon-effect-on-black-background.mp4",
  //   // "videos/social-media-icon-with-neon-effect.mp4",
  // ];
  // var videoIndex = 0;
  // var videoElement = document.getElementById("backgroundVideo");

  // function playNextVideo() {
  //   videoElement.src = videos[videoIndex];
  //   videoElement.play();
  //   videoIndex = (videoIndex + 1) % videos.length;
  // }

  // videoElement.addEventListener("ended", playNextVideo);
  // playNextVideo();

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Content Writer", "Virtual Assistant"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer", "Content Writer", "Virtual Assistant"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
// script for postsPerPage
const postsPerPage = 6;
const totalPosts = $(".blog-post").length;
const totalPages = Math.ceil(totalPosts / postsPerPage);

function showPage(page) {
  $(".blog-post").hide();
  $(".blog-post")
    .slice((page - 1) * postsPerPage, page * postsPerPage)
    .show();
}

for (let i = 1; i <= totalPages; i++) {
  $(".pagination").append(`<a href="#" class="page-number">${i}</a>`);
}

$(".page-number").first().addClass("active");
showPage(1);

$(".page-number").click(function (e) {
  e.preventDefault();
  $(".page-number").removeClass("active");
  $(this).addClass("active");
  const page = parseInt($(this).text());
  showPage(page);
});

  // Slider functionality
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }