const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const typedUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, typedUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(typedUsername);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
// 가장 먼저 로컬스토리지의 정보 확인
// 이후 Null 경우, form의 hidden을 없애 표시하고 이름을 입력받게 함
// 입력 시 함수 호출 - 1.이벤트(새로고침) 멈추고 2.인풋값을 저장(username)
// 3.로컬 스토리지에 저장 4.form을 숨기고 5.함수 호출
// 이미 있는 경우, 함수 호출 - h1을 다시 표시하고 인사하게 함.
