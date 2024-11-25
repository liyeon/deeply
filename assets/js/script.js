const lottieLogoElement = document.querySelector("#lottie");
const animationPath = lottieLogoElement.dataset.path; // Lottie 애니메이션 JSON 경로

// Lottie 로드
const lottieAnimation = lottie.loadAnimation({
  container: lottieLogoElement, // DOM 요소 그대로 사용
  renderer: "svg", // 렌더링 방식
  loop: true,
  autoplay: true,
  path: animationPath, // JSON 파일 경로
});