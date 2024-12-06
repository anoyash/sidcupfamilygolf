console.log(" *** Initiating gsap *** ");

var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");
var navOptions = document.querySelectorAll("#nav h4");
var elementBefore = CSSRulePlugin.getRule("#elem::before");
var video = document.querySelector("video");

console.log(video.readyState);

video.addEventListener("loadeddata", () => {
  console.log(video.readyState);
  console.log("Ready State for video :" + video.readyState);
});

document.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + 30 + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 100 + "px";
  cursorBlur.style.top = dets.y - 100 + "px";
});

navOptions.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
  });
  element.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid white";
    cursor.style.backgroundColor = "#95c11e";
  });
});

// I have added this event listener because
// my DOM is loaded after my gsap script
// document.addEventListener("DOMContentLoaded", function () {
//   var myNav = document.querySelector("#nav");
//   console.log(myNav);

//   gsap.to("#nav", {
//     backgroundColor: "#000",
//     // height : "120px",
//     // duration : 0.5,
//     // scrollTrigger : {
//     //     trigger:"#nav",
//     //     scroller:"body"
//     // }
//   });
// });

// Now my gsap is working because script tags I have made them defer
// learn more about how web pages are rendered
// one observation my scrollTrigger effect started
// only after giving value of start key in scrollTrigger

/* All GSAP animations written here */
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "120px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -20%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#aboutus img,#aboutustext", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#aboutus",
    scroller: "body",
    start: "top 65%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  duration: 1,
  scrollTrigger: {
    trigger: "#cards-container",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  x: 50,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  x: -50,
  y: -50,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(elementBefore, {
  cssRule: {
    top: "-30%",
  },
  duration: 1,
  scrollTrigger: {
    trigger: "#elem",
    scroller: "body",
    start: "top 45%",
    end: "top 35%",
    scrub: 1,
  },
});
