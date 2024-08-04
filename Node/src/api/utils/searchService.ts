import puppeteer, { Browser, Page } from "puppeteer";

class Video {
    Title: string;

    constructor(title: string) {
        this.Title = title;
    }
};

export async function searchChannel(id: string, limit: number) {
    const browser: Browser = await puppeteer.launch({ headless: true });
    const page: Page = await browser.newPage();
    const videosArr: Video[] = [];

    await page.goto(`https://youtube.com/@${id}`);

    await page.waitForSelector('yt-tab-shape[tab-title="Videos"][class="yt-tab-shape-wiz yt-tab-shape-wiz--host-clickable"]')
        .then(async tab => {
            if (tab) {
                await tab.click();
            }
            return;
        });

    await page.waitForSelector('yt-formatted-string[id="video-title"][class="style-scope ytd-rich-grid-media"]');

    const videosHandles = await page.$$(
        'yt-formatted-string[id="video-title"][class="style-scope ytd-rich-grid-media"]'
    );

    for (let i = 0; i < limit; i++) {
        try {
            const handle = videosHandles[i];
            const videoTitle = await page.evaluate(element => element.textContent, handle);

            if (videoTitle) {
                const newVideo = new Video(videoTitle.trim());
                videosArr.push(newVideo);
            }
        } catch (error) {
            console.error("Ocorreu um erro: ", error);
        }
    }

    await browser.close();

    return videosArr;
};