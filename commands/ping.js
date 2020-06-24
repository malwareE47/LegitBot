module.exports.run = async (bot, message, args) => {
    console.log("OK")
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`);
}

module.exports.help = {
    name : "ping",
    aliases : ["p"]
}