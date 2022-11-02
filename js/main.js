import CarThumb from './components/TheCarThumbnail.js';
//import Lightbox from './components/TheLightboxComponent.js';

(() => {
    const { createApp } = Vue

    createApp({
        created() {
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.carData = data)
                .catch(error => console.error(error));
        },

        data() {
            return {
                carData: {},
                //ligthboxData: {}
            }
        },

        methods: {
            loadLightBox(item) {
                debugger;
                //this.lightboxData = item;
            }
        },

        components: {
            carthumbnail: CarThumb,
            //Lightbox: Lightbox
        }
    }).mount('#container')
})()