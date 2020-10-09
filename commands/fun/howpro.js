const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
  name: "howpro",
  aliases: ["prorate", "pro"],
  category: "fun",
  description: "Pro Machine Scanner!",
  usage: "Howpro <Mention Member>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    let Member =
      message.mentions.users.first() ||
      message.guild.member(args[0]) ||
      message.author;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Pro v2 Machine`)
      .setDescription(`${Member.username} Is ${Result}% Pro! `)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};