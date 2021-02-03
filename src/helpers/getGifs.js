
export const getGifs = async (categoria) => {
    const API_KEY = 'PBO5aPWAVyVg7x07EN67e6SaYZjZm79W';
    const LIMIT = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=${LIMIT}&api_key=${API_KEY}`;
    try {
        
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(({id,title,images:{downsized_medium:{url}}}) => ({id, title, url}))

        return gifs

    } catch (err) {

    }
}