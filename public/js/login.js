const usernameInput = document.getElementById("in-username");
const passwordInput = document.getElementById("in-password");
const submitBtn = document.getElementById("submit");

function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

const handleSubmit = async e => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // console.log(username, password);

  const response = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  // console.log(response);
  if (response.status == 200) {
    createCookie("username", result.username, 1);
    window.location.replace("admin.html");
  } else {
    alert("unauthorized");
  }
};

submitBtn.addEventListener("click", handleSubmit);


