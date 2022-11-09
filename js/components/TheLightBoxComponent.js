export default {
    name: 'TheLightboxComponent',
    
    props: ['car'],

    template:
    `
    <section class="lightbox">

            <h2>MINI COOPER 3 DOOR</h2>
            <div class="line"></div>
            <div class="infoTable">
                <div class="carImage">
                    <img :src='"images/" + car.carMainPic' alt="car image">
                </div>
                <div class="info1">
                    <h3>{{ car.title1 }}</h3>
                    <p>{{ car.text1 }}</p>
                </div>
                <div class="info1">
                    <h3>{{ car.title2 }}</h3>
                    <p>{{ car.text2 }}</p>
                </div>
                <div class="info1">
                    <h3>{{ car.title3 }}</h3>
                    <p>{{ car.text3 }}</p>
                </div>
            </div>

        </section>
    `

    //methods: {
    //    closeLB() {
    //        this.$emit('closelb');
    //    }
    //}
}