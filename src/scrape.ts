require('module-alias/register')

import {Scraper} from "@/scraper/Scraper";

(async () => {
    const url = process.env.npm_config_url;

    if (url === undefined) {
        console.log('[]');
        return
    }

    const scraper = new Scraper();
    let items = await scraper.scrape(url);

    items = items.map((item: any) => ({
        edition: (item.nft.meta.edition || item.nft.token_id),
        price: item.price
    }))

    console.log(JSON.stringify(items));
})();
