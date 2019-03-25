const Discord = require("discord.js");
const axios = require("axios");
const chalk = require("chalk");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if(args[0] == null) return message.channel.send("Please fill in a coin. Like: !get lisk");

    let crypto;

    switch(args[0].toLowerCase()){
        case "bitcoin":
            crypto = "BTC";
            break;
        case "auroracoin":
            crypto = "AUR";
            break;
        case "bitcoincash":
            crypto = "BCH";
            break;
        case "dash":
            crypto = "DASH";
            break;
        case "dogecoin":
            crypto = "DOGE";
            break;
        case "eosio":
            crypto = "EOS";
            break;
        case "ethereum":
            crypto = "ETH";
            break;
        case "ethereumclassic":
            crypto = "ETC";
            break;
        case "gridcoin":
            crypto = "GRC";
            break;
        case "lisk":
            crypto = "LSK";
            break;
        case "litecoin":
            crypto = "LTC";
            break;
        case "mazacoin":
            crypto = "MZC";
            break;
        case "monero":
            crypto = "XMR";
            break;
        case "namecoin":
            crypto = "NMC";
            break;
        case "nem":
            crypto = "XEM";
            break;
        case "neo":
            crypto = "NEO";
            break;
        case "nxt":
            crypto = "NXT";
            break;
        case "peercoin":
            crypto = "PPC";
            break;
        case "potcoin":
            crypto = "POT";
            break;
        case "primecoin":
            crypto = "XPM";
            break;
        case "ripple":
            crypto = "XRP";
            break;
        case "stellar":
            crypto = "XLM";
            break;
        case "tether":
            crypto = "USDT";
            break;
        case "titcoin":
            crypto = "TIT";
            break;
        case "verge":
            crypto = "XVG";
            break;
        case "vertcoin":
            crypto = "VTC";
            break;
        case "zcash":
            crypto = "ZEC";
            break;
        default:
            message.channel.send("Crypto not found");
            return;
    }

    axios.get('https://min-api.cryptocompare.com/data/price', {
        params: {
		  fsym: crypto,
		  tsyms: "USD,EUR,CNY,RUB",
			api_key: botconfig.apiKey
        }
    })
    .then(function (response) {
		let cryptoEmbed = new Discord.RichEmbed()
		.setDescription(args[0].charAt(0).toUpperCase() + args[0].slice(1))
		.setColor(botconfig.embedColor)
		.addField("Euro", response.data.EUR)
		.addField("American Dollar", response.data.USD)
		.addField("Yuan", response.data.CNY)
		.addField("Rouble", response.data.RUB)
		.setFooter("CryptoBot By CorneHQ");
		
		message.channel.send(cryptoEmbed);

		return;
    })
    .catch(function (error) {
		console.log(chalk.red(error));
		
		return;
    })
}

module.exports.help = {
    name: "get"
}