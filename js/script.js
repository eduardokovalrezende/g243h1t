imprime =(mgs) => console.log(msg);

fazerSorteio = () => {
    let num1 = document.getElementById("inicio").value;
    let num2 = document.getElementById("fim").value;
    num2 = Number(num2) +1;
    let sorteio = Math.floor( Math.random() * (Number(num2) - Number(num1)) );
    
    document.getElementById("resultado").innerHTML = sorteio;

}
function escolher_aba(btn){
    for(let i = 1; i <= 4; i++){
        let id_btn = "btn"+1;
        document.getElementById(id_btn).style.backgroundColor = "blue";
        document.getElementById (id_btn).disabled = false;
        document.getElementsByClassName(class_aba).style.display= "none";
    }
        document.getElementById("btn1").style.backgroundColor = "red";
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn")
    }
    if(btn == "1"){
        document.getElementById("btn1").style.backgroundColor = "red";
        document.getElementById("btn1").disabled = true;
    }

    if(btn == "1"){
        document.getElementById("btn1").style.backgroundColor = "red";
        document.getElementById("btn1").disabled = true;
    }

    if(btn == "1"){
        document.getElementById("btn1").style.backgroundColor = "red";
        document.getElementById("btn1").disabled = true;
    }

    