// Define a data em que estamos em contagem regressiva
let countDownDate = new Date("Nov 27, 2023 23:59:25").getTime();

// Atualize a contagem regressiva a cada 1 segundo
let x = setInterval(function() {

// Pega a data e hora de hoje
  let now = new Date().getTime();

// Encontre a distância entre agora e a data da contagem regressiva
  let distance = countDownDate - now;

// Cálculos de tempo para dias, horas, minutos e segundos
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe o resultado no elemento com id = "demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

// Se a contagem regressiva terminar, exiba algum texto
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRADO";
  }
}, 1000);