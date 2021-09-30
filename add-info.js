// Function that adds the info the user enters to the database
function addInfo() {
  let fullname = document.querySelector(".add-input.yp-name").value;
  let profileImagedrag = document.querySelector(".add-input.yp-image").value;
  let profileImageselect = document.querySelector("#select-image").value;
  let day = document.querySelector(".day.yp-birthday").value;
  let month = document.querySelector(".month.yp-birthday").value;
  let year = document.querySelector(".year.yp-birthday").value;
  let birthDate = day + "/" + month + "/" + year;

  console.log(birthDate.length);
  let profilePic = "";

  if (profileImagedrag === null || profileImagedrag === "") {
    profilePic = profileImageselect;
  } else if (profileImageselect === null || profileImageselect === "") {
    profilePic = profileImagedrag;
  }

  console.log(profilePic);

  let values = {
    full_name: fullname,
    profile_image: profilePic,
    birthday: birthDate,
  };

  checkDob(birthDate);

  fetch("https://yp-database.herokuapp.com/add_userinfo/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then(() => {
      alert("Your information was added successfully");
      window.location.reload();
    });
}

function checkDob(dateOfbirth) {
  if (dateOfbirth.length > 10 || dateOfbirth.length < 10) {
    alert("date of birth incorrect");
    window.location.reload();
  } else {
    // pass
  }
}

window.addEventListener("keyup", function closeWindow(event) {
  let x = event.key;
  if (x === "X") {
    window.location.href = "./index.html";
  }
});
