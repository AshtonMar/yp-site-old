function makeCard(info) {
  return `

<div class="profile-card">
<h1 class="name">${info["full_name"]}</h1>
  <img
  class="profile-pic"
    src="${info["profile_image"]}"
    alt="profile-pic"
  />
  <p class="age">19</p>
  <p class="birthday">${info["birthday"]}</p>
</div>
`;
}

function getInfo() {
  fetch("https://yp-database.herokuapp.com/view_profiles/")
    .then((response) => response.json())
    .then((data) => {
      let ypData = data.yp_data;

      ypData.forEach((yp) => {
        let janContainer = document.querySelector("#jan-container");
        let febContainer = document.querySelector("#feb-container");
        let marContainer = document.querySelector("#mar-container");
        let aprContainer = document.querySelector("#apr-container");
        let mayContainer = document.querySelector("#may-container");
        let junContainer = document.querySelector("#jun-container");
        let julContainer = document.querySelector("#jul-container");
        let augContainer = document.querySelector("#aug-container");
        let sepContainer = document.querySelector("#sep-container");
        let octContainer = document.querySelector("#oct-container");
        let novContainer = document.querySelector("#nov-container");
        let decContainer = document.querySelector("#dec-container");

        if (yp["birthday"].substr(3, 2) === "01") {
          janContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "02") {
          febContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "03") {
          marContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "04") {
          aprContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "05") {
          mayContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "06") {
          junContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "07") {
          julContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "08") {
          augContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "09") {
          sepContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "10") {
          octContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "11") {
          novContainer.innerHTML += makeCard(yp);
        } else if (yp["birthday"].substr(3, 2) === "12") {
          decContainer.innerHTML += makeCard(yp);
        } else {
          console.log("A Users YP's Incorrect");
        }
      });
    });
}

getInfo();
