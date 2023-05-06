import { createClient } from 'pexels';

const client = createClient('oc6Fo96QjXj8NyhPQsh1zzkp6HT7HfgHL91jjKGM7MVbQp1z0iY2eTJz');
const query = 'sushi';


export function getImages(){
    // Get sushi images from Api Pexels
    return client.photos.search({ query, per_page: 4 }).then(json => {
        return [...json.photos]
    });
}