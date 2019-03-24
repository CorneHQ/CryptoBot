const Discord = require("discord.js");
const axios = require("axios");
const chalk = require("chalk");

module.exports.run = async (bot, message, args) => {
    axios.get('https://min-api.cryptocompare.com/data/price', {
        params: {
		  fsym: "GRC",
		  tsyms: "USD,EUR",
		  api_key: "897761cbb66df68597ccd12a08ba51695a35e4ba5f858843c3e0a2ab130a3adf"
        }
    })
    .then(function (response) {
		let bitcoinEmbed = new Discord.RichEmbed()
		.setDescription("Gridcoin Values")
		.setColor("#50C7C7")
		.addField(":euro: Euro", response.data.EUR)
		.addField(":dollar: Dollar", response.data.USD)
		.setFooter("CryptoBot By CorneHQ");
		
		message.channel.send(bitcoinEmbed);

		return;
    })
    .catch(function (error) {
		console.log(chalk.red(error));
		
		return;
    })
}

module.exports.help = {
    name: "gridcoin"
}