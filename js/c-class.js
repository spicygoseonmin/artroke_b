const urlParams = new URLSearchParams(window.location.search);
const classId = urlParams.get("id");
//   console.log(catId);
function displayClassInfo() {
  fetch("c-class_data.json")
    .then((response) => response.json())
    .then(function (data) {
      // console.log(data);
      const catListDiv = document.getElementById("c-class_list_ul");
      const c_class = data.find((cat) => cat.id === parseInt(catId));
      // console.log(cat);
      if (cat) {
        const catCard = document.createElement("div");
        catCard.className = "cat-card";
        catCard.innerHTML = `
         <img class="cat-image" src="${cat.url}" alt="${cat.title} 사진">
                      <h2>${cat.title}</h2>
                      <p>고양이 특징: ${cat.description}</p>
        `;
        catListDiv.appendChild(catCard);
      } else {
        console.error("고양이 정보가 없습니다.");
      }
    })
    .catch((error) => {
      console.error("데이터를 가져오는 중 에러가 발생했습니다:", error);
    });
}
displayCatInfo();
