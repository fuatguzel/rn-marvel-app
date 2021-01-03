import { publicApiKey, rootApiUrl, hash, ts } from "./apiUtils";

export const fetchComics = async () => {
    const responce = await fetch(
        rootApiUrl + "/v1/public/comics" + "?ts=" + ts + "?apikey=" + publicApiKey + "&hash=" + hash)
    const comics = await responce.json();
    return comics;
}

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c824dbcf67914ef04c63be44609c6798&hash=b6db18842575f6c7dcc5ce38f40546f8