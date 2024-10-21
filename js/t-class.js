window.addEventListener("load", function () {
  // data.json을 로딩, 연결시킨다.
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (e) {
    const req = e.target;

    if (req.readyState === XMLHttpRequest.DONE) {
      const str = req.response;
      // console.log(str);
      //   json문자열로 변화 JSON.parse(str)
      let obj = JSON.parse(str);
      // console.log(obj)
      //   일반강의
      C_CLASS_LIST = obj.tclass;
      // 일반강의 화면 배치
      show_C_class();
    }
  };
  //   자료호출
  xhttp.open("GET", "class_data.json");
  xhttp.send();

  //일반강의 목록======================================
  let C_CLASS_LIST;
  let classList = this.document.getElementById("class_lists");

  // 일반강의 출력기능======================================
  function show_C_class() {
    let html = `
    <ul id="c-class_list_ul">
    `;
    C_CLASS_LIST.forEach(function (item) {
      // console.log(item);
      const tag = `
                <li>
                  <div class="img_wrap">
                  <img src="images/main_ class_img/${item.url}" alt="${item.title}">
                      <div class="mark">
                    </div>
                  </div>
                  <div class="text_wrap">
                    <div class="class-title">${item.title}</div>
                      <div class="instructor-info">
                        <div class="class-cate">${item.description}</div>
                        <div class="instructor-info-line"></div>
                        <div class="instructor-name">${item.teacher}</div>
                      </div>
                  </div>
                </li>
    `;
      html += tag;
      // console.log(tag);
    });
    html += `
        </ul>
        `;
    classList.innerHTML = html;
    const mark = this.document.querySelectorAll("li .mark");
    mark.forEach(function (item, index) {
      // console.log(item);
      // console.log(index);
      item.addEventListener("click", function () {
        // 클릭된 li 요소의 제목 가져오기
        const classTitle = item.closest("li").querySelector(".class-title").textContent;
        if (item.classList.toggle("active")) {
          alert(`'${classTitle}' 강의가 관심목록에 추가되었습니다.`);
        } else {
          alert(`'${classTitle}' 강의가 관심목록에 해제되었습니다.`);
        }
      });
    });

    // // 인기순 / 개강순 강의 나열
    // const show_pop_num = document.querySelector("#s_popular_num")
    // const show_open_num = document.querySelector("#s_open_num")
    // show_pop_num.addEventListener("click", function(){})
  }
  const selectElement = document.querySelector(".p_or_o_select"); // <select> 요소 선택

  selectElement.addEventListener("change", function () {
    // 선택된 옵션이 "개강순"인지 확인
    if (selectElement.value === "s_popular_num") {
      // rank로 클래스 리스트 정렬
      const sortedClasses = C_CLASS_LIST.sort((a, b) => a.rank - b.rank);
      show_C_class(sortedClasses);
      // console.log(sortedClasses);
    }
    if (selectElement.value === "s_open_num") {
      // rank로 클래스 리스트 정렬
      const sortedClasses = C_CLASS_LIST.sort((a, b) => a.id - b.id);
      show_C_class(sortedClasses);
      // console.log(sortedClasses);
    }
  });
  menuList.forEach((menu) => {
    menu.addEventListener("click", function () {
      // 모든 메뉴에서 active 클래스 제거
      menuList.forEach((item) => item.classList.remove("active"));

      // 현재 클릭된 메뉴에 active 클래스 추가
      menu.classList.add("active");
    });
  });
});
