window.addEventListener("load", (event) => {
  window.document.body.style.overflow = "auto";
});

const header = window.document.querySelector(".header");
const contactHeader = window.document.querySelector(".section--logo");
const nav = window.document.querySelector(".nav");
const navList = window.document.querySelector(".navigation__list");
const links = navList.querySelectorAll(".navigation__link");
const toggleBtn = window.document.querySelector(".navigation__toggle-btn");
const scrollTopBtn = window.document.querySelector(".scroll-top-btn");

document
  .querySelector(".navigation__link--dl")
  .addEventListener("click", (e) => {
    e.stopPropagation();
  });

// #region Loader
window.addEventListener("load", (event) => {
  const preloader = window.document.querySelector(".preloader");
  preloader.style.opacity = 0;
  window.setTimeout(() => {
    preloader.style.zIndex = -1;
    window.document.body.style.overflow = "auto";
  }, 500);
});

// #region Sticky navigation: Intersection Observer API
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("u-sticky"); // sticky nav
  } else {
    nav.classList.remove("u-sticky"); //  sticky nav
  }
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

navObserver.observe(contactHeader);
// #endregion

// #region scrollTopBtn : Intersection Observer API
const topBtnScroll = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    scrollTopBtn.style.display = "flex"; // show scrollTopBtn
  } else {
    scrollTopBtn.style.display = "none"; // hidden scrollTopBtn
  }
};

const headerObserver = new IntersectionObserver(topBtnScroll, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);
// #endregion

//#region for scrollTopBtn
scrollTopBtn.addEventListener("click", function (e) {
  header.scrollIntoView({ behavior: "smooth" });
});

// // //#region section navigation by using event delegation & smooth scroll.
// navList.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains('navigation__link')) {
//     let navH = nav.getBoundingClientRect().height;
//     const targetSec = window.document.querySelector(
//       e.target.getAttribute('href')
//     );
//     const targetSecCoords = targetSec.getBoundingClientRect();

//     navH = nav.getBoundingClientRect().height;

//     links.forEach((i) => {
//       i.classList.remove('navigation__link--active');
//     });
//     e.target.classList.add('navigation__link--active');

//     //close navList in small devices
//     if (window.innerWidth < 992) {
//       navList.classList.add('u-hidden');
//     }

//     window.scrollTo({
//       left: targetSec.offsetLeft,
//       top: targetSec.offsetTop - navH,
//       behavior: 'smooth',
//     });

//     // window.scrollTo({
//     //     left: targetSecCoords.left + window.pageXOffset,
//     //     top: targetSecCoords.top + window.pageYOffset - navH ,
//     //     behavior: 'smooth',
//     // });
//   }
// });
// //#endregion

//#region For Setting  NavBar Toggle Button.
toggleBtn.addEventListener("click", function () {
  navList.classList.toggle("u-hidden");
});
//#endregion

//#region For hidden  navList in  small devices xs, sm and md Media.
// Create a condition that targets viewports at up tp 991.99px wide
const mdMediaVar = window.matchMedia("(max-width: 991.99px)");

function mdMediaFun(e) {
  // Check if the media query is true
  if (e.matches) {
    navList.classList.add("u-hidden");
  }
}

// Register event listener
mdMediaVar.addListener(mdMediaFun);

// Initial check
mdMediaFun(mdMediaVar);
//#endregion

//#region For show  navList in  large devices lg, xl and xxl Media.
// Create a condition that targets viewports at least 768px wide
const lgMediaVar = window.matchMedia("(min-width: 992px)");

function lgMediaFun(e) {
  // Check if the media query is true
  if (e.matches) {
    navList.classList.remove("u-hidden");
  }
}

// Register event listener
lgMediaVar.addListener(lgMediaFun);

// Initial check
lgMediaFun(lgMediaVar);
//#endregion

let contactForm = window.document.querySelector(".contactForm");
let contactFormSelectInput = window.document.querySelector(
  ".contactForm__service-input"
);
let contactFormSelectList = window.document.querySelector(
  ".contactForm__select-list"
);

//custom selectbox set value
if (contactFormSelectList) {
  contactFormSelectList.addEventListener("click", function (e) {
    if (e.target.classList.contains("contactForm__select-item")) {
      contactFormSelectInput.value = e.target.textContent.trim();
    }
  });
}

const TIMELINE_DATA = [
  {
    year: "1985",
    title: "Saudi Bell was founded in Riyadh",
    image: "https://picsum.photos/600/400",
  },
  {
    year: "1991",
    title: "Became a key provider for IT, <br>telecom and physical security",
    image: "https://picsum.photos/600/400",
  },
  {
    year: "1996",
    title: "Established Jeddah branch",
    image: "https://picsum.photos/600/400",
  },
  {
    year: "1997",
    title: "Established Jeddah branch",
    image: "https://picsum.photos/600/400",
  },
  {
    year: "2000",
    title: "Established Dammam branch",
    image: "https://picsum.photos/600/400",
  },
  {
    year: "2021",
    title: "Expanding regionally to serve <br>the Middle East",
    image: "https://picsum.photos/600/400",
  },
];

if (window.location.href.includes("about")) {
  let timeline = new Timeline("timeline", TIMELINE_DATA);
  timeline.init();
}

// #region scrollTopBtn : Intersection Observer API
// const topBtnScroll = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) {
//     scrollTopBtn.style.display = "flex"; // show scrollTopBtn
//   } else {
//     scrollTopBtn.style.display = "none"; // hidden scrollTopBtn
//   }
// };

// const headerObserver = new IntersectionObserver(topBtnScroll, {
//   root: null,
//   threshold: 0,
// });

// headerObserver.observe(header);
// // #endregion

// //#region for scrollTopBtn
// scrollTopBtn.addEventListener("click", function (e) {
//   header.scrollIntoView({ behavior: "smooth" });
// });

//#region Get the current year
document.getElementById("year").innerHTML = new Date().getFullYear();
