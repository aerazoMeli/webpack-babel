class Photos {

    async getPhotos() {
        await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
        .then(async resp => console.log(await resp.json()));
    }

}

export default Photos;