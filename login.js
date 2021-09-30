// Login Function(index.html Page)
function adminLogin() {
  let usernameValue = document.querySelector(
    ".admin-info.admin-username"
  ).value;
  let passwordValue = document.querySelector(
    ".admin-info.admin-password"
  ).value;
  let username = "YPLeader";
  let password = "YoungPeople";

  if (username === usernameValue && password === passwordValue) {
    alert("You Are Sucessfully Logged In");
    location.href = "./view-info.html";
  } else {
    alert("You Are Not The Admin");
    window.location.href = "./add-info.html";
  }
}
