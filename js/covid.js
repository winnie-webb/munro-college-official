import {getChart} from "./covid-chart-module.js";
const ctx = document.getElementById("myChart");
const getData =  ()=>{
const cases = document.querySelector(".cases__amount");
const recovered = document.querySelector(".recovered__amount");
const deaths = document.querySelector(".deaths__amount");
async function getCovidData(){
    const data = await fetch("https://covid19.mathdro.id/api/countries/jamaica")
    const stats = await data.json();
    getChart(ctx,stats);
if(data.status === 200){
    const confirmedStats = stats.confirmed.value;
    const recoveredStats = stats.recovered.value;
    const deathStats = stats.deaths.value;
    cases.innerText = confirmedStats;
    recovered.innerText = recoveredStats;
    deaths.innerText = deathStats;
    
}else{
    cases.innerText = "Sorry, data retrieval failed";
    recovered.innerText = "Sorry, data retrieval failed";
    deaths.innerText = "Sorry, data retrieval failed";
}
}
getCovidData();
}

getData()