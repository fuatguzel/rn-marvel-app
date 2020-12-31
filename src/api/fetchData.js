import { publicApiKey, privateApiKey, rootApiUrl } from "./apiUtils";

export const fetchComics = async () => {
    const responce = await fetch(
        rootApiUrl + ":443/v1/public/comics" + "?apiKey=" + publicApiKey)
    const comics = await responce.json();
    return comics;
}