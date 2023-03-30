 // Функция изменения цвета фона веб-страницы
 function changeBodyBg(color){
  document.body.style.background = color;
}

// Функция изменения цвета фона заголовка
function changeHeadingBg(color){
  document.getElementById("heading").style.background = color;
}






// var btn = document.getElementById("theme-button");
// var link = document.getElementById("theme-link");

// btn.addEventListener("click", function () { ChangeTheme(); });

// function ChangeTheme()
// {
//     let lightTheme = "styles/light.css";
//     let darkTheme = "styles/dark.css";

//     var currTheme = link.getAttribute("href");
//     var theme = "";

//     if(currTheme == lightTheme)
//     {
//    	 currTheme = darkTheme;
//    	 theme = "dark";
//     }
//     else
//     {    
//    	 currTheme = lightTheme;
//    	 theme = "light";
//     }

//     link.setAttribute("href", currTheme);

//     Save(theme);
// }

