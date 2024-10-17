window.addEventListener("load", function () {
  const signForm = this.document.getElementById("sign-form");
  
  signForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // 사용자 입력 값들
    const userNameInput = document.getElementById("userId");
    const userPassWordInput = document.getElementById("userPassWord");
    const userEmailInput = document.getElementById("userEmail");
    const userphonNunberInput = document.getElementById("userNumber");
    
    const userName = userNameInput.value.trim();
    const userPassWord = userPassWordInput.value.trim();
    const userEmail = userEmailInput.value.trim();
    const userPhoneNunber = userphonNunberInput.value.trim();

    // 유효성 검사 정규식
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /.{6,}/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex = /^\d{11}$/;

    if (!usernameRegex.test(userName)) {
      alert("아이디는 영문자와 숫자로만 이루어져야 합니다.");
      return;
    }
    if (!passwordRegex.test(userPassWord)) {
      alert("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }
    if (!emailRegex.test(userEmail)) {
      alert("이메일 양식이 틀립니다. 다시 확인해 주세요.");
      return;
    }
    if (!phoneNumberRegex.test(userPhoneNunber)) {
      alert("전화번호는 11자리를 입력해주세요.");
      return;
    }

    // 필수 체크박스 검사
    const checkKey = document.querySelectorAll(".checkbox");
    let allChecked = true;

    checkKey.forEach(function (item) {
      if (!item.checked) {
        allChecked = false;
      }
    });

    if (!allChecked) {
      alert("필수 항목에 모두 동의해야 합니다.");
      return;
    }

    // 사용자 정보 저장
    const newUser = {
      userName: userName,
      userPassWord: userPassWord,
      userEmail: userEmail,
      userPhoneNunber: userPhoneNunber,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
    window.location.href = "login.html";
  });

  // 전체 동의 체크박스
  const checkAll = document.getElementById("checkBoxAll");
  const chkArr = document.querySelectorAll("#checkBox"); 
  
  checkAll.addEventListener("change", function () {
    chkArr.forEach(function (item) {
      item.checked = checkAll.checked;
    });
  });
  const logoImg = this.document.getElementById("logoImg")
  logoImg.addEventListener("click",function(){
    window.location.href = "index.html"
  })
});
