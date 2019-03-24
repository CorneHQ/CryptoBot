const Discord = require("discord.js");
const axios = require("axios");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
    axios.get('https://min-api.cryptocompare.com/data/price', {
        params: {
		  fsym: "LTC",
		  tsyms: "USD,EUR,CNY,RUB",
		  api_key: "897761cbb66df68597ccd12a08ba51695a35e4ba5f858843c3e0a2ab130a3adf"
        }
    })
    .then(function (response) {
		let litecoinEmbed = new Discord.RichEmbed()
		.setDescription("Litecoin Values")
		.setColor("#50C7C7")
		.addField("Euro", response.data.EUR)
		.addField("American Dollar", response.data.USD)
		.addField("Yuan", response.data.CNY)
		.addField("Rouble", response.data.RUB)
		.setFooter("CryptoBot By CorneHQ");
		
		message.channel.send(litecoinEmbed);

		return;
    })
    .catch(function (error) {
		console.log(chalk.red(error));
		
		return;
    })
}

module.exports.help = {
    name: "litecoin"
}