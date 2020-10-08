const config = require('./config.json');
const request = require('sync-request');


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
module.exports = {
        
<<<<<<< HEAD
     apiGet(symbol){
        try{
            var http = require('https');
            var date = new Date();
=======
    apiGet(symbol){
        
        var date = new Date();
>>>>>>> f8cbf9b6256e28fea118a0303298d39ce279d039
            
        if(date.getDay == 6 ){
            date.setDate(date.getDate()-1);// se for Sabado pegar os dados de Sexta
        } else if(date.getDay == 0){
            date.setDate(date.getDate()-2);// se for Domingo pegar os dados de Sexta
        }else if(date.getHours > '18'){
            console.log('Horario OK');// pegando os dados de hoje pois a bolsa já fechou
                
        } else {
            date.setDate(date.getDate()-1);//Pegando os dados de ontem pois a bolsa ainda não fechou
        }
            
        var time = new Date();
        var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+symbol+'&apikey='+config.key;
            
        var res = request('GET', url);
        var api = JSON.parse(res.getBody());
        var fechamento = api['Time Series (Daily)'][formatDate(date)]['4. close'];
        
        return fechamento;
        
    }
};