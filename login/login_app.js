const form = document.getElementById("loginForm");
const user_id = document.getElementById("user_id");
const password = document.getElementById("password");
const togglePw = document.getElementById("togglePw");
const signupLink = document.getElementById("signupLink");

function validate() {
  let ok = true;
  if (!user_id.value.trim()) {
    alert("아이디를 입력하세요.");
    user_id.focus();
    ok = false;
  } else if (!password.value.trim()) {
    alert("비밀번호를 입력하세요.");
    password.focus();
    ok = false;
  }
  return ok;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validate()) return;

  // TODO: 실제 로그인 API로 교체
  // fetch("/api/login", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ user_id: user_id.value, password: password.value }),
  // }).then(...)

  alert(`로그인 시도: ${user_id.value}`);
});

togglePw.addEventListener("click", () => {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  togglePw.querySelector(".text-wrapper-2").textContent = type === "password" ? "보기" : "숨김";
});

signupLink.addEventListener("click", (e) => {
  // 필요하면 여기서 라우팅/모달 로직으로 바꾸기
  // e.preventDefault(); openSignupModal();
});
