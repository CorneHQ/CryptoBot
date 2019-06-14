const Discord = require("discord.js");
const axios = require("axios");
const chalk = require("chalk");
const botconfig = require("../botconfig.json");

const currency_codes = ['BTC','AUR','BCH','DASH','DOGE','EOS','ETH','ETC','GRC','LSK','LTC','MZC','XMR','NMC','XEM','PPC','POT','XPM','XRP','XLM','USDT','TIT','XVG','VTC','ZEC','NEO','NXT'];
const currencies = {
    BITCOIN: currency_code[0],
    AURORACOIN: currency_code[1],
    BITCOINBASH: currency_code[2],
    DASH: currency_code[3],
    DOGECOIN: currency_code[4],
    EOSIO: currency_code[5],
    ETHEREUM: currency_code[6],
    ETHEREUMCLASSIC: currency_code[7],
    GRIDCOIN: currency_code[8],
    LISK: currency_code[9],
    LITECOIN: currency_code[10],
    MAZACOIN: currency_code[111],
    MONERO: currency_code[12],
    NAMECOIN: currency_code[13],
    NEM: currency_code[14],
    PEERCOIN: currency_code[15],
    POTCOIN: currency_code[16],
    PRIMECOIN: currency_code[17],
    RIPPLE: currency_code[18],
    STELLAR: currency_code[19],
    TETHER: currency_code[20],
    TITCOIN: currency_code[21],
    VERGE: currency_code[22],
    VERTCOIN: currency_code[23],
    ZCASH: currency_code[24]
};
module.exports.run = async (bot, message, args) => {
    if(args[0] == null) return message.channel.send("Please fill in a coin. Like: !get lisk");

    const currency = args[0].toUpperCase();
    try {
	if (currency_code.includes(currency))
	    const crypto = currency_code[currency];
	else
            const crypto = currencies[currency];
    } catch (err) {
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
