const { token, prefix } = require("./config.json");
const { config } = require("dotenv");
const discord = require("discord.js");
const fs = require("fs");
const client = new discord.Client({
  disableEveryone: true
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  function randomStatus() {
    let status = [`${client.users.cache.size} Online Users!`, `${client.guilds.cache.size} Servers!`, `=help | =invite`]
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], {type: "WATCHING"});
  }; setInterval(randomStatus, 5000)
  
  console.log('I am Ready!')
})

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // If a command is finally found, run the command
  if (command) command.run(client, message, args);
});

client.on("message", message => {
  if(message.content === `${prefix}servercount`) {
    const embed = new discord.MessageEmbed()
    .setTitle("Server Count")
    .setDescription(`Bot look over ${client.guilds.cache.size} Servers!`)
    message.channel.send(embed)
    }
})

client.on("message", message => {
  if(message.content === `${prefix}membercount`) {
    const embed = new discord.MessageEmbed()
    .setTitle("Member Count")
    .setDescription(`Bot look over ${client.users.cache.size} Online Users!`)
    message.channel.send(embed)
    }
})

client.on("message", message => {
   if(message.content === `${prefix}invite`) {
    if(message.author.bot) return;
     const embed = new discord.MessageEmbed()
     .setTitle("Invite Links")
     .setDescription(`**Invite this bot**:\n[Invite Bot](https://discord.com/oauth2/authorize?client_id=745975047977697352&scope=bot&permissions=1208483062)
\**Join Support Server**:\n[Support Server](https://discord.gg/CTEQyB8)
`)
     .setFooter("Made by DrKnown")
    .setTimestamp()
 message.channel.send(embed)
   }
 })

const express = require("express")
const app = express() ;
app.get("/", (req, res) => {
res.sendStatus(200)
});
app.listen(3000)

client.on("message", message => {
   if(message.content === `${prefix}invites`) {
    if(message.author.bot) return;
     const embed = new discord.MessageEmbed()
     .setTitle("Invite Links")
     .setDescription(`**Invite this bot**:\n[Invite Bot](https://discord.com/oauth2/authorize?client_id=745975047977697352&scope=bot&permissions=1208483062)
\**Join Support Server**:\n[Support Server](https://discord.gg/CTEQyB8)
`)
     .setFooter("Made by DrKnown")
    .setTimestamp()
 message.channel.send(embed)
   }
 })

client.on("message", message => {
   if(message.content === `${prefix}link`) {
    if(message.author.bot) return;
     const embed = new discord.MessageEmbed()
     .setTitle("Invite Links")
     .setDescription(`**Invite this bot**:\n[Invite Bot](https://discord.com/oauth2/authorize?client_id=745975047977697352&scope=bot&permissions=1208483062)
\**Join Support Server**:\n[Support Server](https://discord.gg/CTEQyB8)
`)
     .setFooter("Made by DrKnown")
    .setTimestamp()
 message.channel.send(embed)
   }
 })

client.on("message", message => {
   if(message.content === `${prefix}links`) {
    if(message.author.bot) return;
     const embed = new discord.MessageEmbed()
     .setTitle("Invite Links")
     .setDescription(`**Invite this bot**:\n[Invite Bot](https://discord.com/oauth2/authorize?client_id=745975047977697352&scope=bot&permissions=1208483062)
\**Join Support Server**:\n[Support Server](https://discord.gg/CTEQyB8)
`)
     .setFooter("Made by DrKnown")
    .setTimestamp()
 message.channel.send(embed)
   }
 })


    
client.login(token);