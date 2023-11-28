function addUser(){

    p1_name = document.getElementById("p1_name").value;
    p2_name = document.getElementById("p2_name").value;

    localStorage.setItem("p1_name", p1_name);
    localStorage.setItem("p2_name", p2_name);

    window.location = "game_page.html";

}

function send(){

    number1 = document.getElementById("Numero1").value;
    number2 = document.getElementById("Numero2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Responsta : <input  type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}