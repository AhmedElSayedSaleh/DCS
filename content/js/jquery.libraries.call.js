$(document).ready(function () {
  // navbar links clickable to Href
  $(".navbar .dropdown > a").click(function () {
    location.href = this.href;
  });

  // ################# rtl boolean reverse ###################
  let rtl;
  if (document.body.dir == "ltr") {
    rtl = false;
  } else {
    rtl = true;
  }

  const owlDrag = document
    .querySelector("#mainOwl")
    .classList.contains("owl-drag");

  //   main owl-carousel
  $("#mainOwl").owlCarousel({
    items: 1,
    rtl: rtl,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      `<i class="fas fa-angle-left"></i>`,
      `<i class="fas fa-angle-right"></i>`,
    ],
    mouseDrag: owlDrag,
    touchDrag: owlDrag,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
  });

  // Variables:
  // storyHiddenContent: Hidden Content Paragraphs in Sotries Card
  // storyBtn: Learn more button in Stories Card
  var storyHiddenContent = $(".stories-card_content").not(":first-of-type"),
    storyBtn = $(".stories-card_button");

  // Slide up and down the storyHiddenContent
  storyBtn.on("click", function () {
    $(this)
      .parents(".stories-card_info")
      .find(storyHiddenContent)
      .slideToggle();
  });

  // Partners owl-carousel
  $(".partners_owl-carousel").owlCarousel({
    rtl: $("body").attr("dir") == "rtl" ? true : false,
    items: 8,
    autoplay: true,
    loop: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      576: {
        items: 4,
      },
      768: {
        items: 5,
      },
      992: {
        items: 7,
      },
      1200: {
        items: 8,
      },
    },
  });

  /*
   *  Run fire function of Jquery validation plugin
   */
  $("#contactForm").validate({
    rules: {
      name: { required: true, minlength: 2 },
      familyName: { required: true, minlength: 2 },
      email: { required: true, email: true },
      service: { required: true },
      message: { required: true, minlength: 20 },
    },
  });

  $("#careersForm").validate({
    rules: {
      name: { required: true, minlength: 2 },
      familyName: { required: true, minlength: 2 },
      email: { required: true, email: true },
      phone: { required: true, number: true },
    },
  });
});
