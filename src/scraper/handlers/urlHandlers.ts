import {ScraperData} from "@/scraper/ScraperData";
import {OffersFromApiResponse} from "@/types/OffersFromApiResponse";
import {OffersFromNextResponse} from "@/types/OffersFromNextResponse";

export function handleItemsJson(json: OffersFromNextResponse, data: ScraperData) {
    const response = json.pageProps.data === undefined
        ? json.pageProps.searchResp
        : json.pageProps.data.searchResp;

    data.total = response.total
    data.items.push(...response.data)
}

export function handleSearchOrders(json: OffersFromApiResponse, data: ScraperData) {
    const response = json.right;
    data.total = response.total
    data.items.push(...response.data)
}
