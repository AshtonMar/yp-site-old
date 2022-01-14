// Login Function(index.html Page)
function adminLogin() {
  let usernameValue = document.querySelector(
    ".admin-info.admin-username"
  ).value;
  let passwordValue = document.querySelector(
    ".admin-info.admin-password"
  ).value;

  let username = "admin";
  let password = "siteAdmin";

  if (username === usernameValue && password === passwordValue) {
    alert("Welcome Admin " + usernameValue);
    location.href = "./view-info.html";
  } else {
    alert("Sorry The Details Are Incorrect, You Are Not The Admin");
    window.location.href = "./add-info.html";
  }
}
