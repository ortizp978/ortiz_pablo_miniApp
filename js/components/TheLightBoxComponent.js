export default {
    name: 'TheLightboxComponent',
    
    props: ['hero'],

    template:
    `
    <lightbox class="lightbox">
            <h2>MINI COOPER 3 DOORS</h2>
            <div class="line"></div>
            <div class="infoTable">
                <div class="carImage">
                    <img src="images/car_image_3door.png" alt="3 door car photo">
                </div>
                <div class="info1">
                    <h3>Example text just to test</h3>
                    <p>A lot of more text just to test how the info fits in this small square</p>
                </div>
                <div class="info1">
                    <h3>Example text just to test</h3>
                    <p>A lot of more text just to test how the info fits in this small square</p>
                </div>
                <div class="info1">
                    <h3>Example text just to test</h3>
                    <p>A lot of more text just to test how the info fits in this small square</p>
                </div>
            </div>

        </lightbox>
    `,

    methods: {
        closeLB() {
            this.$emit('closelb');
        }
    }
}