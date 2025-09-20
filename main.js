function calcular() {
    // declarando variaveis utilizando getElementById e .value para obter os valores das caixas do html
    let horaI = (document.getElementById("horaIni").value)
    let minI = (document.getElementById("minIni").value)
    let horaF = (document.getElementById("horaFim").value)
    let minF = (document.getElementById("minFim").value)
    //criando função que valida horário (impedindo valores de horário impossiveis e não numericos)
    function validarnum(hora,min){
        if (isNaN(hora) ||isNaN(min) ||hora<0 || hora>23 || min<0 || min>59) return false
        return true;
    }
    //criando condição que, na hipotese de serem utilizados valores errados, uma caixa de alerta apareça e seja interrompido o calculo
    if (!validarnum(horaI,minI)|| !validarnum (horaF,minF)){
    alert ('Erro: Favor inserir horários válidos')
    return
    }
    //transformando os valores em numeros com parseInt (fazer isso após a validação previne conflitos)
    horaI = parseInt(horaI)
    minI = parseInt(minI)
    horaF = parseInt(horaF)
    minF = parseInt(minF)
    //obtendo minutos totais inciais e finais (multiplicando as horas por 60 e somando aos minutos)
    let allminI = (horaI*60)+minI
    let allminF = (horaF*60)+minF
    //criando condição para somar 24h na hipotese do horario final ser maior que o inicial (passar da meia noite)
    if (allminI>allminF) {
        allminF = allminF+24*60
    }
    //subtraindo o horario inicial do final (em minutos)
    let allminresult = allminF - allminI
    //fazendo as divisões em relação ao resultado, sendo o resultado inteiro as horas e o resto os minutos
    let horaresult = parseInt(allminresult/60)
    let minresult = allminresult%60
    //utilizando do conceito de concatenação ensinado em aula para adcionar 0 caso o resultado seja menor que 10
    if(horaresult<10){
    document.getElementById("horas").innerText = "0" + horaresult
    }
    else{
    document.getElementById("horas").innerText = horaresult
    }

    if(minresult<10){
    document.getElementById("minutos").innerText = "0" + minresult
    }
    else{
    document.getElementById("minutos").innerText = minresult
    }
}