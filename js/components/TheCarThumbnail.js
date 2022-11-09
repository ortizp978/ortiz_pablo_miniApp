export default {
    name: 'TheCarThumb',

    props: {
        car: Object
    },

    template:
    `
    <li @click="loadLightboxData">
        <img :src='"images/" + car.thumbnailPic' alt="car image">
        <h3>{{car.name}}</h3>
    </li>
    `,

    methods: {
        loadLightboxData() {
            this.$emit('loadlb',this.car);
        }
    }
}