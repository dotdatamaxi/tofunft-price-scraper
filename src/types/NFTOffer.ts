import {NFT} from "@/types/NFT";
import {NFTContract} from "@/types/NFTContract";

export type NFTOffer = {
    id: number;
    nft: NFT;
    nft_contract: NFTContract;
    price: string;
    currency: string;
    type: string;
    end_at: null | string;
    maker: string;
    taker: null | string;
    is_bundle: boolean;
    bundle_name: null | string;
    bundle_desc: null | string;
    bundle: null | any;
    created_at: string;
};
