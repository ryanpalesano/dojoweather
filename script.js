var cookies = document.querySelector("#cookie-line")
var array = []

for (var i = 1; i <= 8; i++){
    array.push("temp"+ i)
}


function dismiss(){
    cookies.remove();
}

function tempConvert(){
    for (var i = 0; i <= array.length; i++){
        document.getElementById(array[i]).innerText = Math.floor (document.getElementById(array[i]).innerText * 1.8 + 32);
    }

}