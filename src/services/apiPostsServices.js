const getAllPosts = async () => {
    const newVar = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());

    return newVar;


}


export {getAllPosts};