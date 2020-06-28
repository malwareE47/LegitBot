const fs = require("fs");
const money = require("../money.json");

module.exports.run = async (bot, message, args) => {

        if(!args[0]) {
            var user = message.author;
        } else {
            var user = message.mentions.users.first() || bot.users.cache.get(args[0]); 
        }
        
        if(!money[user.id]) {
            money[user.id] = {
                name: user.tag,
                money: 0
            }
            fs.writeFile("./money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
            });
        }

        return message.channel.send(`${user.username} has ${money[user.id].money} coins.`);

  }
  
  module.exports.help = {
    name: "balance",
    aliases: ["bal", "money"]
  }