<<<<<<< HEAD
var head = document.getElementsByTagName("head")[0];

for (const weight of ["regular", "thin", "light", "bold", "fill", "duotone"]) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://unpkg.com/@phosphor-icons/web@2.1.1/src/" + weight + "/style.css";
  head.appendChild(link);
}
=======
var head = document.getElementsByTagName("head")[0];

for (const weight of ["regular", "thin", "light", "bold", "fill", "duotone"]) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://unpkg.com/@phosphor-icons/web@2.1.1/src/" + weight + "/style.css";
  head.appendChild(link);
}
>>>>>>> da4484c01dd17e5f1dc3fa165d4315ab786983c9
