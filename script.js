function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let school = document.getElementById("school").value;

  let message = `Hi, I want to feature my school.%0AName: ${name}%0ASchool: ${school}`;

  let url = `https://wa.me/27818733386?text=${message}`;

  window.open(url, "_blank");
}
