<script>
export default {
    name: 'get-window-width',
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    mounted() {
        window.addEventListener('resize', this.getWindowWidth);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
    },

    methods: {
        getWindowWidth(event) {
            this.windowWidth = document.documentElement.clientWidth;
        },
    },
}
</script>
