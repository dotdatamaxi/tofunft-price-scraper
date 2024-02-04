import {ScraperStatus} from "@/scraper/ScraperStatus";
import {NFTOffer} from "@/types/NFTOffer";

export class ScraperData {
    items: NFTOffer[];
    total: number;
    status: ScraperStatus;

    constructor() {
        this.items = [];
        this.total = 0;
        this.status = new ScraperStatus();
    }

    isComplete() {
        return this.items.length === this.total;
    }
}
