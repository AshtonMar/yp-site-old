function manipulateCss() {
  let changeHref = document.querySelector("#css-change");
  window.addEventListener("keyup", function (event) {
    let x = event.key;
    if (x === "C") {
      changeHref.href = "./styles2.css";
    } else if (x === "R") {
      changeHref.href = "./styles.css";
    } else {
      // pass
    }
  });
}

let screenSize = window.matchMedia("(max-width: 425px)");
checkScreen(screenSize);
screenSize.addListener(checkScreen);

function checkScreen(screenSize) {
  if (screenSize.matches) {
    getNav();
  } else {
    // pass
  }
}

function getNav() {
  let nav = document.querySelector(".navbar");
  window.addEventListener("keyup", function (event) {
    let x = event.key;
    window.addEventListener("click", () => {
      nav.style.left = "0px";
    });
    if (x === "N") {
      nav.style.left = "-100px";
    } else {
      // pass
    }
  });
}

manipulateCss();

// Function to create yp-card that displays on the view-info.html page
function makeCard(info) {
  let dob = info["birthday"];
  let age = getUserAge(dob);
  let image = info["profile_image"];

  if (image === "" || image === null) {
    image = "./images/placeholder.png";
  } else {
    // pass
  }
  return `
<div class="profile-card">
  <img class="profile-pic" src="${image}" alt="profile-pic">
  <div class="middle">
    <p class="content-listing">Name</p>
    <p class="card-content name">${info["full_name"]}</p>
    <p class="content-listing">Age</p>
    <p class="card-content age">${age}</p>
    <p class="content-listing">Birthday</p>
    <p class="card-content birthday">${info["birthday"]}</p>
    <button value="${info["yp_id"]}" onclick="deleteInfo(${info["yp_id"]})" class="delete-btn">Delete</button>
  </div>
</div>
`;
}

function getUserAge(birthDay) {
  let day = birthDay.substr(0, 2);
  let month = birthDay.substr(3, 2);
  let year = birthDay.substr(6, 4);

  day = Number(day);
  month = Number(month);
  year = Number(year);
  let age = calculateAge(new Date(year, month, day));

  return age;
}

window.addEventListener("keyup", function closeWindow(event) {
  let x = event.key;
  if (x === "X") {
    window.location.href = "./index.html";
  }
});

function calculateAge(dob) {
  let difference = Date.now() - dob.getTime();
  let ageDate = new Date(difference);
  let ageCalc = Math.abs(ageDate.getUTCFullYear() - 1970);

  return ageCalc;
}

function deleteInfo(yp_id) {
  fetch("https://yp-database.herokuapp.com/delete_userinfo/" + yp_id + "/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(() => {
      alert("Successfully Deleted The UserInfo");
      window.location.reload();
    });
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
