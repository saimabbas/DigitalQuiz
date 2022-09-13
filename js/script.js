let S1S2 = gsap.timeline({
  paused: true,
  defaults: {
    // ease: power4.inOut,
    // duration: 1,
  },
});
S1S2.fromTo(
  ".quiz-step-1",
  {
    x: 0,
  },
  {
    x: "-100%",
  }
).fromTo(
  ".quiz-step-2",
  {
    x: "100%",
  },
  {
    x: 0,
  },
  0
);

let S2S22 = gsap.timeline({
  paused: true,
  defaults: {
    // ease: power4.inOut,
    // duration: 1,
  },
});
S2S22.fromTo(
  ".quiz-step-2",
  {
    x: 0,
  },
  {
    x: "-100%",
  }
).fromTo(
  ".quiz-step-2-2",
  {
    x: "100%",
  },
  {
    x: 0,
  },
  0
);
let S22S3 = gsap.timeline({
  paused: true,
  defaults: {
    // ease: power4.inOut,
    // duration: 1,
  },
});
S22S3.fromTo(
  ".quiz-step-2-2",
  {
    x: 0,
  },
  {
    x: "-100%",
  }
).fromTo(
  ".quiz-step-3",
  {
    x: "100%",
  },
  {
    x: 0,
  },
  0
);
let S3S4 = gsap.timeline({
  paused: true,
  defaults: {
    // ease: power4.inOut,
    // duration: 1,
  },
});
S3S4.fromTo(
  ".quiz-step-3",
  {
    x: 0,
  },
  {
    x: "-100%",
  }
).fromTo(
  ".quiz-step-4",
  {
    x: "100%",
  },
  {
    x: 0,
  },
  0
);

$(".quiz-bottom-1").click(() => {
  document.getElementById("step-number").innerHTML = "2/5";
  S1S2.play(0);
  $(".quiz-bottom-1").css({ display: "none" });
  $(".quiz-bottom-2").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "40%" });
});
$(".quiz-bottom-2 .next-btn").click(() => {
  document.getElementById("step-number").innerHTML = "3/5";
  S2S22.play(0);
  $(".quiz-bottom-2").css({ display: "none" });
  $(".quiz-bottom-2-2").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "60%" });
});
$(".quiz-bottom-2-2 .next-btn").click(() => {
  document.getElementById("step-number").innerHTML = "4/5";
  S22S3.play(0);
  $(".quiz-bottom-2-2").css({ display: "none" });
  $(".quiz-bottom-3").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "80%" });
});
$(".quiz-bottom-3 .next-btn").click(() => {
  document.getElementById("step-number").innerHTML = "5/5";
  S3S4.play(0);
  $(".quiz-bottom-3").css({ display: "none" });
  $(".quiz-bottom-4").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "100%" });
});

$(".quiz-bottom-4 .back-btn").click(() => {
  document.getElementById("step-number").innerHTML = "4/5";
  S3S4.reverse(0);
  $(".quiz-bottom-4").css({ display: "none" });
  $(".quiz-bottom-3").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "80%" });
});
$(".quiz-bottom-3 .back-btn").click(() => {
  document.getElementById("step-number").innerHTML = "3/5";
  S22S3.reverse(0);
  $(".quiz-bottom-3").css({ display: "none" });
  $(".quiz-bottom-2-2").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "60%" });
});
$(".quiz-bottom-2-2 .back-btn").click(() => {
  document.getElementById("step-number").innerHTML = "2/5";
  S2S22.reverse(0);
  $(".quiz-bottom-2-2").css({ display: "none" });
  $(".quiz-bottom-2").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "40%" });
});
$(".quiz-bottom-2 .back-btn").click(() => {
  document.getElementById("step-number").innerHTML = "1/5";
  S1S2.reverse(0);
  $(".quiz-bottom-2").css({ display: "none" });
  $(".quiz-bottom-1").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "20%" });
});
$(".error-msg span").click(() => {
  $(".error-msg").css({ display: "none" });
});
$(".ppm-head span").click(() => {
  $(".privacy-policy-modal").css({ display: "none" });
});
$(".review-p a").click(() => {
  $(".privacy-policy-modal").css({ display: "block" });
});
