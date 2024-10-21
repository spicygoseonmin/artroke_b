window.addEventListener("load", function () {
  // 포인트 소식 슬라이드 구역
  const sw_point = new Swiper(".sw_point", {
    slidesPerView: 3.4, // 보여지는 슬라이드 개수
    spaceBetween: 16, // 슬라이드 간의 간격
  });

  const my_menu = this.document.querySelectorAll(".my_menuList > li");
  const menu_page = this.document.querySelectorAll(".menu_page > .mp");

  //   로드시 활성화 메뉴랑 카드 index[0]
  my_menu[0].classList.add("active");
  menu_page[0].classList.add("active");

  my_menu.forEach(function (my_menus, index) {
    // console.log(menuItem);
    my_menus.addEventListener("click", function () {
      // //   클릭된 메뉴와 해당하는 카드를 비활성화
      my_menu.forEach(function (item) {
        // console.log(item);
        item.classList.remove("active");
      });
      menu_page.forEach(function (menu_pages) {
        menu_pages.classList.remove("active");
      });
      //   클릭된 메뉴와 해당하는 카드를 활성화
      my_menu[index].classList.add("active");
      menu_page[index].classList.add("active");
    });
  });
  const coupon = document.getElementById("coupon-box");
  const button = document.getElementById("payment-button");
  const amount = 50000;

  // 구매자의 고유 아이디를 불러와서 customerKey로 설정하세요.
  // 이메일・전화번호와 같이 유추가 가능한 값은 안전하지 않습니다.
  const widgetClientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
  const customerKey = "o6oZTVeixwIgyRubjs-F-";
  const paymentWidget = PaymentWidget(widgetClientKey, customerKey); // 회원 결제
  // const paymentWidget = PaymentWidget(widgetClientKey, PaymentWidget.ANONYMOUS) // 비회원 결제

  const paymentMethodWidget = paymentWidget.renderPaymentMethods("#payment-method", { value: amount }, { variantKey: "DEFAULT" });

  paymentWidget.renderAgreement("#agreement", { variantKey: "AGREEMENT" });

  coupon.addEventListener("change", function () {
    if (coupon.checked) {
      paymentMethodWidget.updateAmount(amount - 5000);
    } else {
      paymentMethodWidget.updateAmount(amount);
    }
  });

  button.addEventListener("click", function () {
    // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
    // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
    paymentWidget.requestPayment({
      orderId: "w9Gv2zpCNrt_-aUg7xp6z",
      orderName: "토스 티셔츠 외 2건",
      successUrl: window.location.origin + "/success",
      failUrl: window.location.origin + "/fail",
      customerEmail: "customer123@gmail.com",
      customerName: "김토스",
      customerMobilePhone: "01012341234",
    });
  });
});
