"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchChannel = searchChannel;
const puppeteer_1 = __importDefault(require("puppeteer"));
class Video {
    constructor(title) {
        this.Title = title;
    }
}
;
async function searchChannel(id, limit) {
    const browser = await puppeteer_1.default.launch({ headless: true });
    const page = await browser.newPage();
    const videosArr = [];
    await page.goto(`https://youtube.com/@${id}`);
    await page.waitForSelector('yt-tab-shape[tab-title="Videos"][class="yt-tab-shape-wiz yt-tab-shape-wiz--host-clickable"]')
        .then(async (tab) => {
        if (tab) {
            await tab.click();
        }
        return;
    });
    await page.waitForSelector('yt-formatted-string[id="video-title"][class="style-scope ytd-rich-grid-media"]');
    const videosHandles = await page.$$('yt-formatted-string[id="video-title"][class="style-scope ytd-rich-grid-media"]');
    for (let i = 0; i < limit; i++) {
        try {
            const handle = videosHandles[i];
            const videoTitle = await page.evaluate(element => element.textContent, handle);
            if (videoTitle) {
                const newVideo = new Video(videoTitle.trim());
                videosArr.push(newVideo);
            }
        }
        catch (error) {
            console.error("Ocorreu um erro: ", error);
        }
    }
    await browser.close();
    return videosArr;
}
;
