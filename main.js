const fs = require("fs");
const http = require('https'); // or 'https' for https:// URLs
const login = require("fca-unofficial");
const axios = require("axios");


const YoutubeMusicApi = require('youtube-music-api')
const ytdl = require('ytdl-core');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const ffmpegs = require('fluent-ffmpeg');
ffmpegs.setFfmpegPath(ffmpeg.path);
const musicApi = new YoutubeMusicApi()



// GLOBAL MESSAGE STORAGE
let cd = {};
let msgs = {}
let vips = ['100074457226782', '100074457226782']; //TO MAKE YOUR SELF EXEMPTION FROM UNSENDING ENTER YOUR FACEBOOK IDS HERE
const badword = ['gago', 'pota', 'tang ina', 'tanga', 'yawa', 'king ina', 'namo', 'ngina', 'paky', 'fuck', 'shet', 'shit', 'madapak'];

//*====================================================================//*
async function mtsolver(query) {
    let encoded = encodeURIComponent(query);
    let url = "http://api.mathjs.org/v4/?expr=" + encoded;


    var options = {
        method: 'GET',
        url: url,
        headers: {
        }
    };

    var out = axios.request(options).then(function (response) {
        console.log(response);
        return response.data;
    }).catch(function (error) {

        console.log(error);

        return 'error';
    });
    return out


}





//*====================================================================//*
async function enquotes() {
  
    var options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        headers: {
            'x-rapidapi-host': 'quotes15.p.rapidapi.com',
            'x-rapidapi-key': 'd1c29cb265mshf4cd9ef8ed662b3p10689bjsneb3695aa8e61'
        }
    };

    var out = axios.request(options).then(function (response) {
        return response.data.content;
    }).catch(function (error) {
        return 'error';
    });
    return out
}
//*====================================================================//*
async function advices() {

    var options = {
        method: 'GET',
        url: 'https://api.adviceslip.com/advice'
    };

    var out = axios.request(options).then(function (response) {
        return response.data.slip.advice;
    }).catch(function (error) {
        return 'error';
    });
    return out
    
}
//*===============================================================================//*


login({ appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8')) }, (err, api) => {
    if (err) return console.error(err);

    api.setOptions({ listenEvents: true });
    var listenEmitter = api.listen(async(err, event) => {
        let taggs = ["PENDING", "unread"];
        try {
            api.getThreadList(1, null, taggs, (err, list) => {
                if (err) return console.error(err);
                try {
                    api.handleMessageRequest(list[0]['threadID'], true, (err) => {

                        api.sendMessage("Tang ina mo " + list[0]['name'] + "\n\n\nBy: ✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", list[0]['threadID']);

                        api.sendMessage("Invalid Command List of Commands:\n\n-quote\n-advice\n-play music_name\n-solve math problem \n\n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);

                        api.changeNickname("✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", list[0]['threadID'], "100074457226782", (err) => {
                            if (err) return console.error(err);
                        });

                        if (err) return console.error(err);
                    });

                } catch (err) {

                }

            });
        } catch (err) {

        } 
        switch (event.type) {
            case "message_reply":
                if (vips.includes(event.senderID)) {
                    api.setMessageReaction("😘", event.messageID, (err) => {
                    }, true);
                }
                else {
                    api.setMessageReaction("😎", event.messageID, (err) => {
                    }, true);
                }
                let msgid = event.messageID
                let input = event.body;
                msgs[msgid] = input;
                break
            case "message":

                api.getThreadInfo(event.threadID, (err, info) => {
                 
                    try {
                        var nicko = info['nicknames']['100074457226782'];
                        if (nicko != "✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪") {
                            console.log("no nickname");

                            api.sendMessage("Invalid Command List of Commands:\n\n-quote\n-advice\n-play music_name\n-solve math problem \n\n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);

                            api.changeNickname("✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, "100074457226782", (err) => {
                                if (err) return console.error(err);
                            });
                        }
                    } catch (err) {

                        api.sendMessage("Invalid Command List of Commands:\n\n-quote\n-advice\n-play music_name\n-solve math problem \n\n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);

                        api.changeNickname("✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, "100074457226782", (err) => {
                            if (err) return console.error(err);
                        });
                    }
        if (err) return console.error(err);
    });

                if (vips.includes(event.senderID)) {
                    api.setMessageReaction("😘", event.messageID, (err) => {
                    }, true);
                }
                else {
                    api.setMessageReaction("🤡", event.messageID, (err) => {
                    }, true);
                }
                if (event.attachments.length != 0) {
                    if (event.attachments[0].type == "photo") {
                        msgs[event.messageID] = ['img', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "video") {
                        msgs[event.messageID] = ['vid', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "audio") {
                        msgs[event.messageID] = ['vm', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "animated_image") {
                        msgs[event.messageID] = ['gif', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "sticker") {
                        msgs[event.messageID] = ['sticker', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "file") {
                        msgs[event.messageID] = ['file', event.attachments[0].url]
                    }

                } else {
                    msgs[event.messageID] = event.body
                } 

        
                if (event.body != null) {
                    let input = event.body;
                    if (input.toUpperCase().includes("GANDA")) {
                        api.sendMessage("ako lang naman Maganda dito😘 \n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("ML")) {
                        api.sendMessage("ML ka nalang walang Jowa😂 \n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("COD")) {
                        api.sendMessage("COD kapa wala naman papatol sayo😂 \n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("BR")) {
                        api.sendMessage("BR ng BR di naman nang iinvite😂 \n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("BOLD")) {
                        api.sendMessage("Nood BOLD wala kasi Jowa😂 \n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("MILIM")) {
                        api.sendMessage("Wala ka Karapatan banggitin pangalan ko \n\n\n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("HAHA")) {
                        api.sendMessage("Tawa ng Tawa nakaka bwisit AMP😂 \n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("SEND")) {
                        api.sendMessage("anong i send Nudes ko😂 \n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("POGI")) {
                        api.sendMessage("Pssst! Wampepte😂 \n\n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("KANTUTAN")) {
                        api.sendMessage("May Pwet ka naman mag sarili ka nalang😂 \n\n\n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("BOBO")) {
                        api.sendMessage("mas BOBO ka Tang ina MO😂 \n\n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }


                    else if (input.toUpperCase().includes("RG")) {
                        api.sendMessage("Tara RG sino ba naman ako para isama😂 \n\n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }




                    else if (input == "-quote") {
                        try {
                            let s = enquotes();
                            s.then((response) => {
                                if (response == "error") {
                                    api.sendMessage("Invalid Input", event.threadID, event.messageID);

                                } else {
                                    api.sendMessage(response + "\n\n\nQuote by : ✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID);
                                }
                            });
                        } catch (err) {
                            console.log(err);
                        }
                    }


                    else if (input == "-advice") {
                        try {
                            let s = advices();
                            s.then((response) => {
                                if (response == "-error") {
                                    api.sendMessage("Invalid Input", event.threadID, event.messageID);

                                } else {
                                    api.sendMessage(response + "\n\n\nAdvice by : ✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID);
                                }
                            });
                        } catch (err) {
                            console.log(err);
                        }
                    }


                    else if (input.startsWith("-solve")) {

                        let data = input.split(" ");
                        if (data.length > 1) {

                            try {
                                let s = mtsolver(data[1]);
                                s.then((response) => {
                                    if (response == "error") {
                                        api.sendMessage("Invalid Input", event.threadID, event.messageID);

                                    } else {
                                        api.sendMessage(response + "\n\n\nSolved by : ✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID);
                                    }
                                });
                            } catch (err) {
                                console.log(err);
                            }
                        } else {
                            api.sendMessage("Invalid Input", event.threadID, event.messageID);
                            console.log("error");
                        }
                    } 

                    /*====================================================================================*/





                    

                    else if (input.startsWith("-play")) {
                        let data = input.split(" ");
                        if (data.length < 2) {
                            api.sendMessage("Invalid Use Of Command!\Usage: -play music_title", event.threadID);
                        } else {
                            if (!(vips.includes(event.senderID))) {
                                if (!(event.senderID in cd)) {
                                    cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
                                else if (Math.floor(Date.now() / 1000) < cd[event.senderID]) {
                                    api.sendMessage("kumakain pako wait ka muna ng " + Math.floor((cd[event.senderID] - Math.floor(Date.now() / 1000)) / 60) + " mins and " + (cd[event.senderID] - Math.floor(Date.now() / 1000)) % 60 + " seconds", event.threadID, event.messageID);
                                    return
                                }
                                else {
                                    cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
                            }
                            api.sendMessage("Wait hanapin ko muna", event.threadID, event.messageID);
                            try {
                                data.shift();
                                await musicApi.initalize();
                                const musics = await musicApi.search(data.join(" ").replace(/[^\w\s]/gi, ''));
                                if (musics.content.length == 0) {
                                    throw new Error(`${data.join(" ").replace(/[^\w\s]/gi, '')} returned no result!`)
                                } else {
                                    if (musics.content[0].videoId === undefined) {
                                        throw new Error(`${data.join(" ").replace(/[^\w\s]/gi, '')} is not found on youtube music`)
                                    }
                                }
                                const url = `https://www.youtube.com/watch?v=${musics.content[0].videoId}`;
                                console.log(`connecting to yt`);
                                const strm = ytdl(url, {
                                    quality: "lowest"
                                });
                                const info = await ytdl.getInfo(url);
                                console.log(`converting`);
                                ffmpegs(strm)
                                    .audioBitrate(48)
                                    .save(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`)
                                    .on("end", () => {
                                        console.log(`Playing ${data.join(" ").replace(/[^\w\s]/gi, '')}`);
                                        api.sendMessage({
                                            body: "Eto na nakita kona para sayo \n\n" + info.videoDetails.title + "\n\n\nBy: ✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪",
                                            attachment: fs.createReadStream(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`)
                                                .on("end", async () => {
                                                    if (fs.existsSync(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`)) {
                                                        fs.unlink(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`, function (err) {
                                                            if (err) console.log(err);
                                                            console.log(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3 is deleted!`);
                                                        });
                                                    }
                                                })
                                        }, event.threadID, event.messageID);
                                    });

                            } catch (err) {
                                api.sendMessage(`May Problema ${err.message}`, event.threadID, event.messageID);
                                console.log(err);
                            }
                        }

                    }

                    /*====================================================================================*/
                for (let i = 0; i < badword.length; i++) {
                    if (input.toUpperCase().includes(badword[i].toUpperCase())) {
                        api.sendMessage("Bawal mag Mura ako lang pwede Gago \n\n✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID, event.messageID);
                    }
                }

   

                }

                    break;

            case "message_unsend":
                if (!vips.includes(event.senderID)) {
                    let d = msgs[event.messageID];
                    if (typeof (d) == "object") {
                        api.getUserInfo(event.senderID, (err, data) => {
                            if (err) return console.error(err);
                            else {
                                if (d[0] == "img") {
                                    var file = fs.createWriteStream("photo.jpg");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading photo..')
                                            var message = {
                                                body: data[event.senderID]['name'] + " unsent this photo: \n",
                                                attachment: fs.createReadStream(__dirname + '/photo.jpg')
                                            }
                                            api.sendMessage(message, event.threadID);
                                        });
                                    });
                                }
                                else if (d[0] == "vid") {
                                    var file = fs.createWriteStream("video.mp4");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading video..')
                                            var message = {
                                                body: data[event.senderID]['name'] + " unsent this video: \n",
                                                attachment: fs.createReadStream(__dirname + '/video.mp4')
                                            }
                                            api.sendMessage(message, event.threadID);
                                        });
                                    });
                                }
                                else if (d[0] == "gif") {
                                    var file = fs.createWriteStream("animated_image.gif");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading gif..')
                                            var message = {
                                                body: data[event.senderID]['name'] + " unsent this GIF: \n",
                                                attachment: fs.createReadStream(__dirname + '/animated_image.gif')
                                            }
                                            api.sendMessage(message, event.threadID);
                                        });
                                    });
                                }

                                else if (d[0] == "sticker") {
                                    var file = fs.createWriteStream("sticker.png");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading gif..')
                                            var message = {
                                                body: data[event.senderID]['name'] + " unsent this Sticker: \n",
                                                attachment: fs.createReadStream(__dirname + '/sticker.png')
                                            }
                                            api.sendMessage(message, event.threadID);
                                        });
                                    });
                                }

                                else if (d[0] == "vm") {
                                    var file = fs.createWriteStream("vm.mp3");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading audio..')
                                            var message = {
                                                body: data[event.senderID]['name'] + " unsent this audio: \n",
                                                attachment: fs.createReadStream(__dirname + '/vm.mp3')
                                            }
                                            api.sendMessage(message, event.threadID);
                                        });
                                    });
                                }
                            }
                        });
                    }
                    else {
                        api.getUserInfo(event.senderID, (err, data) => {
                            if (err) return console.error("Error: files are" + err + "\nAnti Unsent By Milim");

                            else {
                                api.sendMessage(data[event.senderID]['name'] + " unsent this: \n" + msgs[event.messageID] + "\n\nAnti Unsent By ✪ 𝙈𝙄𝙇𝙄𝙈  𝙁𝘽  𝘽𝙊𝙏 ✪", event.threadID);
                            }
                        });
                    }
         
        

                }
        }

    });
});
