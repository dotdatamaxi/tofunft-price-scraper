import {Project} from "@/types/Project";
import {SearchResponse} from "@/types/SearchResponse";

export type OffersFromNextResponse = {
    pageProps: PageProps
};

export type PageProps = {
    data: NextItemsResponseData
    searchResp: SearchResponse
};

export type NextItemsResponseData = {
    slug: string;
    contract: Project;
    searchResp: SearchResponse
}
