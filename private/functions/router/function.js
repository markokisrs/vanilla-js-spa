let pathname = window.location.pathname;

function removeStyles() {
    let test = document.querySelectorAll("link");
    for (let i = 0; i < test.length; i++) {
        test[i].remove();
    }
    let link = document.createElement("link");
    link.href = "/private/stylesheets/style.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

function loadPage(pathname) {
    fetch("private/views/routes" + pathname + "/route.html")
    .then(response => response.text())
    .then(text => document.querySelector("body").innerHTML += text);
}

function setPage(pathname) {
    let routes = {
        "/": {
            title: "home",
        },
        "/about": {
            title: "about",
        }
    };
    removeStyles();
    if (pathname.split("dynamic")[1]) {
        document.title = "dynamic route";
        navigation();
        let link = document.createElement("link");
        link.href = "/private/stylesheets/style2.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }
    else if (routes[pathname]) {
        document.title = routes[pathname].title;
        navigation();
        if (pathname == "/") {
            pathname = "/home";
        }
        let link = document.createElement("link");
        link.href = pathname + ".css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        loadPage(pathname);
    } else {
        document.title = "404";
    }
}

function route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    setPage(window.location.pathname);
};
setPage(window.location.pathname);