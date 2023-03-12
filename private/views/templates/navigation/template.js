function navigation() {
    return fetch("/private/views/templates/navigation/template.html")
    .then(response => response.text())
    .then(text => document.querySelector("body").innerHTML = text);
}