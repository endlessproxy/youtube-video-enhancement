import puppeteer, { Browser, Page } from "puppeteer";

class Video {
    Title: string;
    Description: string;

    constructor(title: string, description: string) {
        this.Title = title;
        this.Description = description;
    }
};

const videosArr: Video[] = [];

export async function searchChannel (id: string, limit: number) {
    const browser: Browser = await puppeteer.launch({ headless: false });
    const page: Page = await browser.newPage();
    
    await page.goto(`https://youtube.com/@${id}`);

    const videoTabElement = 'div[class="yt-tab-shape-wiz yt-tab-shape-wiz--host-clickable"][tab-title="Videos"]';
    await page.waitForSelector(videoTabElement)
    .then(async tab => {
        if (tab) {
            await tab.click();
        }
        console.error("Elemento não encontrado!");
    }).catch ((error) => {
        console.error("Erro ao encontrar o Seletor: ", error);
    });
    
    await browser.close();
};
