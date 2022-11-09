import CarThumb from './components/TheCarThumbnail.js';
import Lightbox from './components/TheLightboxComponent.js';

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
                lightboxData: {},
                showLightBox: false
            }
        },

        methods: {
            loadLightBox(item) {
                this.lightboxData = item;
                this.showLightBox = true;
            }
        },

        components: {
            carthumbnail: CarThumb,
            lightbox: Lightbox
        }
    }).mount('#container')
})()