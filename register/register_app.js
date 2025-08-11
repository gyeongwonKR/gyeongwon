const f = document.getElementById("signupForm");
const $ = (id) => document.getElementById(id);

const user_id = $("user_id");
const password = $("password");
const passwordConfirm = $("passwordConfirm");
const nickname = $("nickname");
const statusArea = $("statusArea");

// 아이디 규칙: 영문/숫자/언더스코어 4~16
const reUserId = /^[a-zA-Z0-9_]{4,16}$/;
// 비밀번호 권장: 8자 이상(여기서는 최소만 체크)
const rePasswordMin = /^.{8,}$/;


//아이디 중복 확인 버튼 
$("checkIdBtn").addEventListener("click", async () => {
  const id = user_id.value.trim();
  if (!reUserId.test(id)) {
    showStatus("아이디 형식을 확인하세요. <영문/숫자/언더스코어 사용 4~16자 이내> ");
    return;
  }
  // TODO: 실제 API로 교체
  // const res = await fetch(`/auth/check-user_id?user_id=${encodeURIComponent(id)}`);
  // const data = await res.json();  // { available: true/false }
  const fakeAvailable = id !== "admin"; // 데모: admin만 사용 중
  if (fakeAvailable) showStatus("사용 가능한 아이디입니다.", true);
  else showStatus("이미 사용 중인 아이디입니다.");
});


// 비밀번호 보기 / 숨김 토글
$("togglePw").addEventListener("click", () => {
  const cur = password.type === "password" ? "text" : "password";
  password.type = cur;
  $("togglePw").querySelector(".text-wrapper-6").textContent = cur === "password" ? "보기" : "숨김";
});


// 취소 버튼 (이전 페이지 이동)
$("cancelBtn").addEventListener("click", () => {
  // 필요에 따라: location.href = "/"; 로 변경 가능
  history.back();
});

f.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 프론트 검증
  if (!reUserId.test(user_id.value.trim()))
    return showStatus("아이디 형식을 확인하세요.");

  if (!rePasswordMin.test(password.value))
    return showStatus("비밀번호는 8자 이상이어야 합니다.");

  if (password.value !== passwordConfirm.value)
    return showStatus("비밀번호가 일치하지 않습니다.");

  if (!nickname.value.trim())
    return showStatus("닉네임을 입력하세요.");

  showStatus(""); // 에러 지우기

  // TODO: 실제 회원가입 API로 교체
  // const res = await fetch("/auth/signup", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     user_id: user_id.value.trim(),
  //     password: password.value,
  //     nickname: nickname.value.trim()
  //   }),
  // });
  // if (!res.ok) { const err = await res.json(); return showStatus(err.message || "가입 실패"); }

  alert("가입 요청 전송 완료! (지금은 데모)");
  // location.href = "/login.html";
});

function showStatus(msg, ok = false) {
  statusArea.textContent = msg;
  statusArea.classList.toggle("ok", ok);
}
