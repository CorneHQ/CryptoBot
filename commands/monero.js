const Discord = require("discord.js");
const axios = require("axios");
const chalk = require("chalk");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    axios.get('https://min-api.cryptocompare.com/data/price', {
        params: {
		  fsym: "XMR",
		  tsyms: "USD,EUR,CNY,RUB",
			api_key: botconfig.apiKey
        }
    })
    .then(function (response) {
		let moneroEmbed = new Discord.RichEmbed()
		.setDescription("Monero Values")
		.setColor(botconfig.embedColor)
		.addField("Euro", response.data.EUR)
		.addField("American Dollar", response.data.USD)
		.addField("Yuan", response.data.CNY)
		.addField("Rouble", response.data.RUB)
		.setFooter("CryptoBot By CorneHQ");
		
		message.channel.send(moneroEmbed);

		return;
    })
    .catch(function (error) {
		console.log(chalk.red(error));
		
		return;
    })
}

module.exports.help = {
    name: "monero"
}