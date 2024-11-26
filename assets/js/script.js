const lottieLogoElement = document.querySelector("#lottie");
const animationPath = lottieLogoElement.dataset.path; // Lottie 애니메이션 JSON 경로

// Lottie 로드
const lottieAnimation = lottie.loadAnimation({
  container: lottieLogoElement, 
  renderer: "svg", 
  loop: true,
  autoplay: true,
  path: animationPath, // JSON 파일 경로
});

const caseSwiper = new Swiper(".group-case .swiper-wrap", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  grabCursor: true, // 드래그 커서
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    990: {
      slidesPerView: 3.5,
      navigation: {
        nextEl: ".group-case .btn-box .btn.next",
        prevEl: ".group-case .btn-box .btn.prev",
      },
    },
  },
});

gsap.set(".sc-intro .group-sound h2,.sc-intro .group-sound p", {
  filter: "blur(28px)",
  opacity: 0,
  y: 200,
});
gsap.to(".sc-intro .group-sound h2,.sc-intro .group-sound p", {
  filter: "blur(0)",
  opacity: 1,
  y: 0,
});

const intro = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro .group-noise",
    start: "top top",
    end: "bottom bottom",
    scrub: 0,
  },
});
intro.fromTo(
  ".sc-intro .group-noise .headline span",
  {
    autoAlpha: 0,
    filter: "blur(4.5px)",
    stagger: 1,
  },
  {
    autoAlpha: 1,
    filter: "blur(0)",
    stagger: 1,
  }
);

ScrollTrigger.create({
  trigger: ".sc-listen",
  start: "top 30%",
  end: "bottom bottom",
  markers: false,
  onEnter: function () {
    gsap.to(".sc-listen .group-typo h2", {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transform: "perspective(854.701px)",
      perspective: 600,
      duration: 1,
    });
    gsap.to(".sc-listen .group-typo p", {
      opacity: 1,
    });
  },
});

gsap.set(".target", {
  opacity: 0,
  y: 30,
});

function createScrollTrigger(triggerClass) {
  ScrollTrigger.create({
    trigger: triggerClass,
    start: "top 30%",
    end: "bottom bottom",
    markers: false,
    onEnter: function () {
      gsap.to(`${triggerClass} .target`, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      });
    },
  });
}

[".group-real", ".group-case", ".sc-company"].forEach(createScrollTrigger);

let mm = gsap.matchMedia();
mm.add("(min-width: 992px", () => {
  const solution = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc-listen .group-solution",
      start: "top top",
      end: "bottom bottom",
      scrub: 0,
    },
  });
  gsap.set(
    ".sc-listen .group-solution .solution-item2,.sc-listen .group-solution .solution-item3",
    { yPercent: 200 }
  );
  solution
    .to(".sc-listen .group-solution .solution-item1", {
      scale: 0.9,
      filter: "blur(4.5px)",
    })
    .to(".sc-listen .group-solution .solution-item2", { yPercent: 0 }, "<")
    .to(".sc-listen .group-solution .solution-item2", {
      scale: 0.9,
      filter: "blur(4.5px)",
    })
    .to(".sc-listen .group-solution .solution-item3", { yPercent: 0 }, "<");
});
