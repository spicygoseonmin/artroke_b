window.addEventListener("load", function () {
  // data.json을 로딩, 연결시킨다.
  const xhttp = new XMLHttpRequest();
  //    console.log(xhttp);
  xhttp.onreadystatechange = function (e) {
    const req = e.target;
    console.log(req);
    if (req.readyState === XMLHttpRequest.DONE) {
      const str = req.response;
      // console.log(str);
      //   json문자열로 변화 JSON.parse(str)
      let obj = JSON.parse(str);
      //   console.log(obj);
      // 비주얼
      // 실기강의
      PRACTICE_CLASS = obj.practiceClass;
      showPracticeClass();
      // 일반강의
      NORMAL_CLASS = obj.normalClass;
      showNormalClass();
      // 강사 소개
      // 금주의 소식
      NEWS = obj.news;
      showNews()
    }
  };
  xhttp.open("GET", "data.json");
  xhttp.send();
  //   ==================
  // 실기강의
  let PRACTICE_CLASS;
  let practiceClassTag = this.document.getElementById("data-practiceClass");
  // 실기 강의 화면 출력 기능
  function showPracticeClass() {
    let html = `
    <div class="swiper sw-class PC">
    <div class="swiper-wrapper">
    `;
    PRACTICE_CLASS.forEach(function (item) {
      let tag = `
        <div class="swiper-slide">
                  <a href="#" class="class-img">
                    <img src="${item.pic}" alt="" />
                    <span class="rank">${item.rank}</span>
                    <div class="mark">
                    </div>
                  </a>
                  <div class="class-txt-wrap">
                    <div class="class-title">
                      <a href="#">
                        ${item.title}
                      </a></div>
                    <div class="class-instructor-wrap">
                      <div class="instructor-spec">${item.spec}</div>
                      <div class="instructor-info">
                        <div class="class-cate">${item.cate}</div>
                        <div class="instructor-info-line"></div>
                        <div class="instructor-name">${item.instructor}</div>
                      </div>
                    </div>
                  </div>
                </div>
        `;
      html += tag;
    });
    html += `
    </div>
    </div>
    `;
    practiceClassTag.innerHTML = html;
    const swClass = new Swiper(".PC", {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 2,
      navigation: {
        prevEl: ".practice-class .slide-prev",
        nextEl: ".practice-class .slide-next",
      },
    });
    const mark = this.document.querySelectorAll(".PC .mark");
    mark.forEach(function (item, index) {
      // console.log(item);
      // console.log(index);
      item.addEventListener("click", function () {
        item.classList.toggle("active");
      });
    });
  }
  // -------
  // 일반강의
  let NORMAL_CLASS;
  let normalClassTag = this.document.getElementById("data-normalClass");
  // 일반 강의 화면 출력 기능
  function showNormalClass() {
    let html = `
    <div class="swiper sw-class NC">
    <div class="swiper-wrapper">
    `;
    NORMAL_CLASS.forEach(function (item) {
      let tag = `
        <div class="swiper-slide">
                  <a href="#" class="class-img">
                    <img src="${item.pic}" alt="" />
                    <span class="rank">${item.rank}</span>
                    <div class="mark">
                    </div>
                  </a>
                  <div class="class-txt-wrap">
                    <div class="class-title">
                      <a href="#">
                        ${item.title}
                      </a></div>
                    <div class="class-instructor-wrap">
                      <div class="instructor-spec">${item.spec}</div>
                      <div class="instructor-info">
                        <div class="class-cate">${item.cate}</div>
                        <div class="instructor-info-line"></div>
                        <div class="instructor-name">${item.instructor}</div>
                      </div>
                    </div>
                  </div>
                </div>
        `;
      html += tag;
    });
    html += `
    </div>
    </div>
    `;
    normalClassTag.innerHTML = html;
    const swClass = new Swiper(".NC", {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 2,
      navigation: {
        prevEl: ".normal-class .slide-prev",
        nextEl: ".normal-class .slide-next",
      },
    });
    const mark = this.document.querySelectorAll(".NC .mark");
    mark.forEach(function (item, index) {
      // console.log(item);
      // console.log(index);
      item.addEventListener("click", function () {
        item.classList.toggle("active");
      });
    });
  }
  // 강사 소개
  // 금주의 소식
  let NEWS;
  let newsTag = this.document.getElementById("data-news")
  // 금주의 소식 화면 출력 기능
  function showNews(){
    let html = ``;
    NEWS.forEach(function(item){
      let tag = `
      <li>
                <h3>아트로크</h3>
                <div class="news-info">
                  <a href="#" class="news-title">${item.title}</a>
                  <p class="news-date">${item.date}</p>
                </div>
                <div class="news-more"><a href="#">알아보기</a></div>
              </li>
      `
      html += tag;
    })
    newsTag.innerHTML = html;
  }
});
