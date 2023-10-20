const usernameInput = document.getElementById("in-username");
const passwordInput = document.getElementById("in-password");
const submitBtn = document.getElementById("submit");

const handleSubmit = async e => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  console.log(username, password);

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
  window.location.replace("admin.html");
};

submitBtn.addEventListener("click", handleSubmit);
