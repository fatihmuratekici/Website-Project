//Navbar
const btnOpen = document.querySelector(".btn-open");
btnOpen.addEventListener("click", () => {
  const element = document.querySelector(".responsive-nav");
  element.classList.toggle("active");
});
//Arc section photos
const btnGroup = document.querySelectorAll(".btns");
const img = document.getElementById("imgs");
const img2 = document.getElementById("imgs2");
btnGroup.forEach((e, i) => {
  btnGroup[2].style.color = "red";
  e.addEventListener("click", () => {
    img.src = `img/${i + 1}.jpg`;
    if (i < 1) {
      img2.src = `img/3.jpg`;
    } else {
      img2.src = `img/${i}.jpg`;
    }

    e.style.color = "red";
    btnGroup.forEach((elem) => {
      if (e !== elem) {
        elem.style.color = "white";
      }
    });
  });
});

/* Color Change */
const target = document.querySelector(".change");

const callback = (entries) => {
  if (entries[0].isIntersecting) {
    siyah();
  } else {
    beyaz();
  }
  console.log(entries[0]);
};
const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(callback, options);
observer.observe(target);

const siyah = () => {
  document.querySelector("body").style.backgroundColor = "black";
};
const beyaz = () => {
  document.querySelector("body").style.backgroundColor = "white";
};

// Scrolly Frame

const video = document.getElementById("my-video");
const videoBoundary = document.getElementById("my-video-boundary");
let intersecting = false;
let lastScrollPos = window.scrollY;

const scrollVideo = () => {
  if (!intersecting) return;

  if (video.duration && lastScrollPos !== window.scrollY) {
    lastScrollPos = window.scrollY;
    const distanceFromTop =
      window.scrollY + videoBoundary.getBoundingClientRect().top;
    const rawPercentScrolled =
      (window.scrollY - distanceFromTop) /
      (videoBoundary.scrollHeight - window.innerHeight);
    const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

    video.currentTime = video.duration * percentScrolled;
  }

  requestAnimationFrame(scrollVideo);
};

document.addEventListener("DOMContentLoaded", (_) => {
  const options = {
    root: null, //relative to viewport
    rootMargin: "0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    intersecting = entries[0].isIntersecting;
    scrollVideo();
  }, options);
  observer.observe(video);
});
