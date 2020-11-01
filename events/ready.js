const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const config = require('../config.json');

var prefix = config.prefix;


module.exports = client => {
 
  client.user.setActivity(`TEXT`, {
  type: "STREAMING",
  url: "https://www.twitch.tv/USER"  
  });
};
