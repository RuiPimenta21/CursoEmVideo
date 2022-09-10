let  relogio = () =>{
    
    let data = new Date();

    let dia = data.getDay();
    let mes = data.getMonth();
    let ano = data.getFullYear()
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    let periodo = "AM";
    if(horas == 0){
        horas = 12;
    }
    else if(horas >= 12){
        horas = horas - 12;
        periodo = "PM";
    }

    ano = ano < 10 ? "0" + ano : ano;
    mes = mes < 10 ? "0" + mes : mes;
    dia = dia < 10 ? "0" + dia : dia;

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    let tempoData = dia + " : " + mes + " : " + ano ;
    let tempoHoras = horas + " : " + minutos + " : " + segundos + " " + periodo;


    //console.log(tempoData);
    //console.log(tempoHoras);

    document.getElementById("lblTempoDia").innerText = tempoData;
    document.getElementById("lblTempoHoras").innerText = tempoHoras;

    setTimeout(relogio, 1000);
}

relogio();
