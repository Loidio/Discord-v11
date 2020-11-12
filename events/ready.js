const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const config = require('../config.json');

var prefix = config.prefix;

module.exports = client => {
  client.user.setStatus("online");
  client.user.setActivity("text", { type: "WATCHING"});
};
