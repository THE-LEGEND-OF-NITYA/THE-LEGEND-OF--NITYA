const fs = require("fs");
module.exports.config = {
        name: "Coffee",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "𝐌.𝐑 𝐀𝐑𝐘𝐀𝐍", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Coffee",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Coffee")==0 || event.body.indexOf("coffee")==0 || event.body.indexOf("COFFEE ")==0 || event.body.indexOf("cofi")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐌.𝐑 𝐀𝐑𝐘𝐀𝐍 \n_______________________\n\n𝐘𝐀𝐀 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐂𝐎𝐅𝐅𝐄𝐄 \n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Pinterest-boomerang.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
