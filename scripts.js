var city = "Lockport"; 

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&APPID=27944980ec2b7f7fbbdf98589584e674",
 function(data){
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var realFeel = data.main.feels_like;
    var wind = data.wind.speed; 
    var weather = data.weather[0].main;
    var location = data.main.name;

    $('.icon').attr('src',icon);
    $('.weather').append(weather);
    $('.temp').append(temp + "°F");
    $('.realFeel').append(realFeel + "°F");
    $('.wind').append(wind+ " mph");
});