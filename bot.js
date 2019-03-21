const gamestats = [`باليز`,`لا`,`باليز`,`لا`,`باليز`,`K`]
var index = 0
var timer = 10 // الوقت بالثواني لتغير الستريمنق
client.on("ready", ()=> {
        setInterval(function(){
        client.user.setGame(`${gamestats[index]}`,'https://www.twitch.tv/ToxicCodes') 
        index++
            if( index >= gamestats.length) index = 0 ;
        }, timer*1000);

}); 




client.login(process.env.USER_TOKEN);
