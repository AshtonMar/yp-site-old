// Function that adds the info the user enters to the database
function addInfo() {
  // Information taken from the form using the input values
  let fullname = document.querySelector(".add-input.yp-name").value;
  let profileImagedrag = document.querySelector(".add-input.yp-image").value;
  let phoneNumber = document.querySelector(".add-input.yp-number").value;
  let day = document.querySelector(".day.yp-birthday").value;
  let month = document.querySelector(".month.yp-birthday").value;
  let year = document.querySelector(".year.yp-birthday").value;
  // Format the structure of the date of birth
  let birthDate = day + "/" + month + "/" + year;
  // Let the profile pic equal null so that it can
  // reasigned depending on the value of the profile pic
  let profilePic = "";

  // The profile pic check
  if (profileImagedrag === null || profileImagedrag === "") {
    profilePic = "./images/placeholder.jpg";
  } else {
    profilePic = profileImagedrag;
  }

  let phoneNumberLength = phoneNumber.length;
  console.log(phoneNumberLength);
  //The Phone Number
  if (
    (phoneNumber === "" && phoneNumberLength < 10) ||
    phoneNumberLength > 10
  ) {
    alert("Your Phone Number Is Invalid");
  }

  // Stores the info entered into the form
  let ypInfo = {
    full_name: fullname,
    profile_image: profilePic,
    phone_number: phoneNumber,
    birthday: birthDate,
  };

  // Checks the date of birth if it is correct
  dobCheck(birthDate);

  // fetches the function to add info to the database
  fetch("https://yp-database.herokuapp.com/add_userinfo/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(ypInfo),
  })
    .then((response) => response.json())
    .then(() => {
      alert("Your information was added successfully");
      window.localStorage.setItem("ypInfo", ypInfo);
      window.location.href = "./view-info.html";
    });
}

console.log(localStorage.getItem("ypInfo"));

let dobCheck = (dateOfbirth) => {
  if (dateOfbirth.length != 10) {
    alert("date of birth incorrect");
    window.location.reload();
  } else {
    // pass
  }
};

// Key sequence that returns the user to the previous screen
window.addEventListener("keyup", (event) => {
  let x = event.key;
  if (x === "X") {
    window.location.href = "./index.html";
  }
});
