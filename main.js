function calcular() {
    let horaI = parseInt(document.getElementById("horaIni").value)
    let minI = parseInt(document.getElementById("minIni").value)
    let horaF = parseInt(document.getElementById("horaFim").value)
    let minF = parseInt(document.getElementById("minFim").value)
    function validarnum(hora,min){
        if (isNaN(hora) ||isNaN(min) ||hora<0 || hora>23 || min<0 || min>59) return false
        return true;
    }
    if (!validarnum(horaI,minI)|| !validarnum (horaF,minF)){
    window.location.reload()
    alert ('Erro: Favor inserir horários válidos') 
    }
    let allminI = (horaI*60)+minI
    let allminF = (horaF*60)+minF
    if (allminI>allminF) {
        allminF = allminF+24*60
    }
    let allminresult = allminF - allminI
    let horaresult = (parseInt(allminresult/60)).toString().padStart(2, '0')
    let minresult = (allminresult%60).toString().padStart(2, '0')
    document.getElementById("horas").innerText = horaresult
    document.getElementById("minutos").innerText = minresult
}