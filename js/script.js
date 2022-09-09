let S1S2 = gsap.timeline({
  paused: true,
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
let S2S3 = gsap.timeline({
  paused: true,
});
S2S3.fromTo(
  ".quiz-step-2",
  {
    x: 0,
  },
  {
    x: "-100%",
  }
).fromTo(
  ".quiz-step-3",
  {
    x: "200%",
  },
  {
    x: 0,
  },
  0
);
let S3S4 = gsap.timeline({
  paused: true,
});
S3S4.fromTo(
  ".quiz-step-3",
  {
    opacity: "1",
    x: 0,
  },
  {
    opacity: 0,
    x: "-100%",
  }
).fromTo(
  ".quiz-step-4",
  {
    opacity: "0",
    x: "300%",
  },
  {
    opacity: 1,
    x: 0,
  },
  0
);

$(".quiz-bottom-1").click(() => {
  /* $(".quiz-step-1").css({ display: "none" });
  $(".quiz-step-2").css({ display: "flex" }); */
  S1S2.play(0);
  $(".quiz-bottom-1").css({ display: "none" });
  $(".quiz-bottom-2").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "50%" });
  $(".quiz-top > p").innerHTML = "2/4";
});
$(".quiz-bottom-2 .next-btn").click(() => {
  /* $(".quiz-step-2").css({ display: "none" });
  $(".quiz-step-3").css({ display: "flex" }); */
  S2S3.play(0);

  $(".quiz-bottom-2").css({ display: "none" });
  $(".quiz-bottom-3").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "75%" });
});
$(".quiz-bottom-3 .next-btn").click(() => {
  /* $(".quiz-step-3").css({ display: "none" });
  $(".quiz-step-4").css({ display: "flex" }); */
  S3S4.play(0);
  $(".quiz-bottom-3").css({ display: "none" });
  $(".quiz-bottom-4").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "100%" });
});
$(".quiz-bottom-4 .back-btn").click(() => {
  /* $(".quiz-step-4").css({ display: "none" });
  $(".quiz-step-3").css({ display: "flex" }); */
  S3S4.reverse(0);
  $(".quiz-bottom-4").css({ display: "none" });
  $(".quiz-bottom-3").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "75%" });
});
$(".quiz-bottom-3 .back-btn").click(() => {
  /* $(".quiz-step-3").css({ display: "none" });
  $(".quiz-step-2").css({ display: "flex" }); */
  S2S3.reverse(0);
  $(".quiz-bottom-3").css({ display: "none" });
  $(".quiz-bottom-2").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "50%" });
});
$(".quiz-bottom-2 .back-btn").click(() => {
  /* $(".quiz-step-2").css({ display: "none" });
  $(".quiz-step-1").css({ display: "flex" }); */
  S1S2.reverse(0);
  $(".quiz-bottom-2").css({ display: "none" });
  $(".quiz-bottom-1").css({ display: "flex" });
  $(".quiz-prog-inner").css({ width: "25%" });
});
