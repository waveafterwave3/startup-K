function submitForm() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var course = document.getElementById("course").value;
  var specialty = document.getElementById("specialty").value;

  // Здесь вы можете отправить данные на сервер или выполнить другую необходимую логику

  window.location.href = "success.html";
}
