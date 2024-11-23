console.log("Initiating gsap");

//var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (dets) => {
//   cursor.style.left = dets.x + "px";
//   cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 100 + "px";
  cursorBlur.style.top = dets.y - 100 + "px";
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
