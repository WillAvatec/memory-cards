// This shuffles, but the implementation doesnt work as intended, because instead of returning an
// array it returns an element from that arry

/* export const randomRef = (array)=>{
    let copy = [...array];
    return () => {
        if (copy.length < 1) { copy = [...array]; }
        let index = Math.floor(Math.random() * copy.length);
        let item = copy[index];
        copy.splice(index, 1);
        return item;
    };
} */

//It shuffles, but more often than not, get same elements twice in a row, or even fourth in a row

/* export const random = (images)=>{
    return images.sort(() => Math.random() - 0.5)
} */

export const random = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
}