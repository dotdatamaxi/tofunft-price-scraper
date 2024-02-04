import {NFTMeta} from "@/types/NFTMeta";

export type NFT = {
    id: number;
    meta: NFTMeta;
    nft_contract: string;
    owner: string;
    token_id: string;
    suspicious: boolean;
    network_id: number;
    likes_count: number;
    last_price: null | string;
    meta_key: null | string;
};

