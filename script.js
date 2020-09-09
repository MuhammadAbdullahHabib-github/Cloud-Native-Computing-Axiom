let theme = localStorage.getItem("theme")

if (theme == null) {
    chnageTheme('light')
}else {
    chnageTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0 ;  themeDots.length > i ; i++) {
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        chnageTheme(mode);
    })
}

function chnageTheme(mode) {
    if (mode == 'light') {
        document.getElementById("theme-style").href = "./css/style.css";
    }

    if (mode == 'blue') {
        document.getElementById("theme-style").href = "./css/blue.css";
    }

    if (mode == 'purple') {
        document.getElementById("theme-style").href = "./css/purple.css";
    }

    if (mode == 'green') {
        document.getElementById("theme-style").href = "./css/green.css";
    }

    localStorage.setItem("theme" , mode)

}