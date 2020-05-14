const discordBotkit = require('botkit-discord');

const configuration = {
	token: "NzA5NDczMjQxOTMyMTAzNzIw.Xr2Elw.jzmqrXzri7XjBFwiE_d1IiI8y1A"
};

const discordBot = discordBotkit(configuration);
const normalizedPath = require("path").join(__dirname, "skills");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
	require("./skills/" + file)(discordBot);
});

module.exports = discordBot;
