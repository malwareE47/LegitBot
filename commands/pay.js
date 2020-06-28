const money = require("../money.json");
const fs = require("fs");



module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.members.first() || bot.users.get(args[0]);
    if(!user)  return message.reply("You need to mention anyone. That's a 1 IQ thing tbh");

    if(!args[1]) return message.reply("You need to share the coins ya dumbhead");

    if(!money[message.author.id]) return message.reply("Lmao you don't have any money");

    if(parseInt(args[1]) > money[message.author.id].money) return message.reply("You don't have that much money?");
    if(parseInt(args[1]) < 1) return message.reply("Stop tryna fool me. You can't give money less than 1 coin foolish hooman");

    if(!money[user.id]) {

        money[user.id] = {
            name : bot.users.get(user.id).tag,
            money: parseInt(args[1])
        }

        money[message.author.id].money -= parseInt(args[1]);

        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
        });
    } else {

        money[user.id].money += parseInt(args[1]);

        money[message.author.id].money = parseInt(args[1]);
        
        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);

    });
}

    return message.channel.send(`${message.author.username} gave ${args[1]} coins to ${bot.user.get(user.id).username}`);}


    module.exports.help = {
        name: "give",
        aliases : ["share", "pay"]
    }