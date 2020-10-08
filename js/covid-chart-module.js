export {getChart}
function getChart(ctx,stats){
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Confirmed","Recovered","Deaths"],
        datasets: [{
            label: '# of Cases',
            data: [stats.confirmed.value,stats.recovered.value,stats.deaths.value],
            backgroundColor: [
                'blue',
                'green',
                'red',
            ],
            borderColor: [
                'blue',
                'green',
                'red',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
