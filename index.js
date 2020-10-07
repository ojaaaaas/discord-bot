const Discord = require('discord.js');
const api = require('imageapi.js');
const bot = new Discord.Client();


const PREFIX = '!';
bot.on('ready', () => {
    console.log("Raju is online!");
})

bot.on('message',async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){
        case "hello":
            message.reply("Hello!Welcome to ValoGang!");
            break;
        
        case "game":
            message.channel.send("rocket league khelo chup chap");
            break;

        case "version":
            if(args[1] === "info")
            message.reply("Im built on node version 4.0.1");
            break;
        
        case "meme":
            let subreddits = ["ValorantMemes", "funnymemes"];
            let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
            let img = await api(subreddit)

            const Embed = new Discord.MessageEmbed().setTitle('A meme for you!').setURL("https://www.reddit.com/r/ValorantMemes").setColor('RANDOM').setImage(img);

            message.channel.send(Embed);

    }
})

bot.login(process.env.token);