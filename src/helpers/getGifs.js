export const getGifs = async(category) => {
    const apiKey = 'b31Wf8jQxYwT7pJtcUfq89BelSK2EUkJ';
    const peticion = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`);
    const { data } = await peticion.json();
    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}