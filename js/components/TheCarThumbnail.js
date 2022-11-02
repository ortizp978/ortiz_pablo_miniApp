export default {
    name: 'TheCarThumb',

    props: {
        car: Object
    },

    template:
    `
    <li>
        <img :src='"images/" + car.thumbnailPic' alt="car image">
        <h3>{{car.name}}</h3>
    </li>
    `,

    methods: {
        loadLighboxData() {
            this.$emit('loadlb',this.car);
        }
    }
}