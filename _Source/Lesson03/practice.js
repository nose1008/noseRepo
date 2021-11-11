function syakyou(){
    var color = document.getElementById("syakyouZone").style.color;
    if(color == "red"){
        document.getElementById("syakyou").style.color = 'blue';
    }else{
        document.getElementById("syakyou").style.color = 'red';
    }
}

function whoishe(){
    var name = document.getElementById("who").name;
    if(name == "gihun"){
        for(i=0;i<=100;i++){
            document.getElementById("who").src = "./img/you.jpg";
            if(i==50){
                alert("50回変わりました");
            }
        }
        
    }else{
        alert("nose machigaitayo");
    }
}