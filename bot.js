const discordBotkit = require('botkit-discord');

const configuration = {
	token: "NzA5NDg3MDczMjg3MjA4OTYw.XruSHw.56amBFGjggf6pRr71KsfcO94BEA"
};

const discordBot = discordBotkit(configuration);
const normalizedPath = require("path").join(__dirname, "skills");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
	require("./skills/" + file)(discordBot);
});

module.exports = discordBot;
