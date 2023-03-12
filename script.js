function dynamicallyLoad(url)
{
    let script = document.createElement("script");
    script.src = url;
    script.defer = " ";
    document.head.appendChild(script);
}
dynamicallyLoad("/private/views/templates/navigation/template.js");
dynamicallyLoad("/private/functions/router/function.js");