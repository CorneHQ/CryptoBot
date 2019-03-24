const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.login(botconfig.token);