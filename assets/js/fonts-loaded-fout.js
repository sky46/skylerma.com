if(sessionStorage.fontsLoadedFoutWithClass) {
    document.documentElement.classList.add("fonts-loaded");
}

else if( "fonts" in document ) {
    Promise.all([
        document.fonts.load("1em 'Figtree'"),
        document.fonts.load("1em 'Fira Code'"),
    ]).then(function () {
        document.documentElement.classList.add("fonts-loaded");

        sessionStorage.fontsLoadedFoutWithClass = true;
    });
}
