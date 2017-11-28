function dynamicallyLoadScript(url) {
    var script = document.createElement("script");
    script.src = url;

    document.head.appendChild(script);
}

dynamicallyLoadScript('js/hint.js')
dynamicallyLoadScript('js/shortcuts.js')
dynamicallyLoadScript('js/spoilers.js')
dynamicallyLoadScript('js/image_preview.js')
