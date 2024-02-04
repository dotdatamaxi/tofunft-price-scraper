import {handleItemsJson, handleSearchOrders} from "@/scraper/handlers/urlHandlers";
import {ScraperData} from "@/scraper/ScraperData";
import {HTTPRequest, HTTPResponse, Page} from "puppeteer";

export async function handleResponse(response: HTTPResponse, page: Page, data: ScraperData): Promise<void> {
    const request: HTTPRequest = response.request();
    const requestUrl: string = request.url();

    const urlHandlers = {
        'items.json': handleItemsJson as (json: any, data: ScraperData) => void,
        'api/searchOrders': handleSearchOrders as (json: any, data: ScraperData) => void
    };

    if (!Object.keys(urlHandlers).some(urlPart => requestUrl.includes(urlPart))) {
        return;
    }

    if (response.ok() && request.resourceType() === 'fetch') {
        const json = await response.json()

        for (const [urlPart, handler] of Object.entries(urlHandlers)) {
            if (requestUrl.includes(urlPart)) {
                handler(json, data);
            }
        }

        if (data.isComplete()) {
            data.status.lastPageLoaded = true;
            return;
        }

        try {
            await loadMoreItems(page);
        } catch (e) {
            data.status.lastPageLoaded = true;
        }
    }
}

async function loadMoreItems(page: Page): Promise<void> {
    const button = await page.waitForSelector("text/Load more", {timeout: 500});
    await button?.click();
}
