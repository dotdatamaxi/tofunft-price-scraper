import {handleRequest} from "@/scraper/handlers/requestHandler";
import {handleResponse} from "@/scraper/handlers/responseHandler";
import {ScraperData} from "@/scraper/ScraperData";
import {getRandomUserAgent} from "@/utilities/user-agents";
import puppeteer, {Browser, HTTPResponse, Page} from "puppeteer";

export class Scraper {
    timeout: number = 100;

    async scrape(url: string): Promise<any> {
        const browser: Browser = await this.buildBrowser();
        const page: Page = await this.buildPage(browser);
        const data: ScraperData = new ScraperData();

        page.on('request', handleRequest)
        page.on('response', (response: HTTPResponse) => handleResponse(response, page, data));

        await page.goto(url);

        await this.triggerApiRequest(page);

        while (!data.status.lastPageLoaded) {
            await new Promise(r => setTimeout(r, this.timeout));
        }

        await browser.close();

        return data.items;
    }

    async buildBrowser(): Promise<Browser> {
        return await puppeteer.launch({headless: "new"});
    }

    async buildPage(browser: Browser): Promise<Page> {
        const page = await browser.newPage();
        await page.setUserAgent(getRandomUserAgent());
        await page.setViewport({width: 800, height: 600});
        await page.setRequestInterception(true);

        return page;
    }

    async triggerApiRequest(page: Page): Promise<void> {
        const buttonOptions = {timeout: this.timeout};

        const newestButton = await page.waitForSelector("text/Newest", buttonOptions);
        await newestButton?.click();

        const priceLowToHighButton = await page.waitForSelector("text/Price: Low to High", buttonOptions);
        await priceLowToHighButton?.click();
    }
}
