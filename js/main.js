// first button
let btn1 = document.querySelector(".changebody");
btn1.onclick = function () {
    if (document.body.style.background == "white") {
        document.body.style.background = "yellow";
    } else {
        document.body.style.background = "white";
    }
    // second button
};
let btn2 = document.querySelector(".changetext");
let p = document.querySelector("p")
btn2.onclick = function () {
    if (p.style.color != "red") {
        p.style.color = "red";

    } else {
        p.style.color = "black";
    }

};

// third button
let btn3 = document.getElementsByClassName("bigger")[0];
btn3.onclick = function () {
    if(btn3.style.width =="20%"){
    btn3.style.width = "30%";
    }else{
         btn3.style.width = "20%";
    }
};
// fourth button
let btn4 = document.querySelector(".bordersolid");
let p1 = document.querySelector(".p1");
btn4.onclick = function () {
    if( p1.style.border == "none"){
    p1.style.border = "2px solid black";
    }else{
        p1.style.border="none";
    }

};

// fifth button
let btn5 = document.querySelector(".changecolor");
btn5.onclick = function () {
    if (btn5.classList.contains("btn-info")) {

        btn5.classList.remove("btn-info");
        btn5.classList.add("btn-success");
    }
    else {
        btn5.classList.remove("btn-succes");
        btn5.classList.add("btn-info");
    }

};

// sixth button 
let btn6 = document.querySelector(".fontsize");
let h1 = document.querySelector("h1");
btn6.onclick = function () {
    if (h1.style.fontSize == "25px") {

        h1.style.fontSize = "40px";
    }
    else {
        h1.style.fontSize = "25px";
    }
};

// 7 button
let btn7 = document.querySelector(".size");
let image = document.querySelector("img");
btn7.onclick = function () {
    if (image.style.border == "none") {
        image.style.border = "2px solid black";
    } else {
        image.style.border = "none";
    }
};
// buttun8 
let btn8 = document.querySelector(".textcolor");
btn8.onclick = function () {
    if (btn8.classList.contains("btn-success")) {
        btn8.classList.remove("btn-success");
        btn8.classList.add("btn-dark");

    } else {
        btn8.classList.remove("btn-dark");
        btn8.classList.add("btn-success");
    }
};
// buttun9
let btn9 = document.querySelector(".paragraph");
let h2 = document.querySelector("h2")
btn9.onclick = function () {
    if (h2.style.fontStyle != "italic") {

        h2.style.fontStyle = "italic";
    }
    else { h2.style.fontStyle ="normal"; }


};
//button10
let btn10 = document.querySelector(".toblue");
let div1 = document.querySelector(".mydiv1");
btn10.onclick = function () {

    if (div1.style.backgroundColor !== "lightblue") {
        div1.style.backgroundColor = "lightblue";
    } else {
        div1.style.backgroundColor = "";
    }
};

