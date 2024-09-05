//criar uma constante com a chave API
const key = 'e0283766cee7e7e70be7e75409ae8042'

function Coletar() {
    let cidade = document.querySelector('.input-cidade').value
    Dados(cidade)
}

//Consumindo dados da API OpenWeather
async function Dados(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
    console.log(dados)
    ExibirDados(dados)
}

//Função trocar dados na tela
function ExibirDados(dados) {
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.graus').innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + " °C"
    document.querySelector('.previsao').innerHTML = dados.weather[0].description
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.umidade').innerHTML = "Umidade Relativa do Ar: " + dados.main.humidity + " %"
    document.querySelector('.pressao').innerHTML = "Pressao atmosférica: " + dados.main.pressure + " hPa"
    document.querySelector('.nivelMar').innerHTML = "Nivel do Mar: " + dados.main.sea_level + " hPa"
    document.querySelector('.tempMax').innerHTML = "Temperatura Maxima: " + Math.floor(dados.main.temp_max) + " °C"
    document.querySelector('.tempMin').innerHTML = "Temperatura Minima: " + Math.floor(dados.main.temp_min) + " °C"
}