export const randomRef = (array)=>{
    let copy = [...array];
    return () => {
        if (copy.length < 1) { copy = [...array]; }
        let index = Math.floor(Math.random() * copy.length);
        let item = copy[index];
        copy.splice(index, 1);
        return item;
    };
}