import {NFTContractInfo} from "@/types/NFTContractInfo";

export type NFTContract = {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    contract: string;
    network_id: number;
    verified: boolean;
    suspicious: boolean;
    icon_url: string;
    rank: null | number;
    info: NFTContractInfo;
    nsfw: boolean;
    nft_contract_bundle_id: null | number;
};
