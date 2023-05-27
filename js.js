document.addEventListener("DOMContentLoaded", function () {
  var scrollButtons = document.querySelectorAll(".buttom-want");

  scrollButtons.forEach(function (scrollButton) {
    scrollButton.addEventListener("click", function () {
      var targetElement = document.getElementById(this.dataset.target);

      targetElement.scrollIntoView();
    });
  });
});
function clearForm() {
  var firstname = document.getElementById("first-name");
  var lastname = document.getElementById("last-name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");
  firstname.value = "";
  lastname.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  var myText = document.getElementById("mytext");
  myText.style.opacity = "1";
});
