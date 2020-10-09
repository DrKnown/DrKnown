module.exports = {
  name: "ping",
  category: "utility",
  description: "Get a bot ping",
  usage: "ping",
  run: (client, message) => {
    message.channel.send(`**My ping is ${client.ws.ping}ms!**`);
  }
};
