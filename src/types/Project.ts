export type Project = {
    id: number;
    verified: boolean;
    network_id: number;
    info: ProjectInfo;
    name: string;
    contract: string;
    es_mapping: any[];
    rarity_meta: null | any;
    stats: ProjectStats;
};

export type ProjectInfo = {
    desc: string;
    links: ProjectLinks;
    title: string;
    cover_url: string;
};

export type ProjectLinks = {
    medium: string;
    discord: string;
    twitter: string;
    homepage: string;
};

export type ProjectStats = {
    onsale_number: number;
    player_count: string;
    market_vol: string;
    market_sold: number;
    market_floor_price: MarketFloorPrice;
};

export type MarketFloorPrice = {
    [key: string]: number;
};
