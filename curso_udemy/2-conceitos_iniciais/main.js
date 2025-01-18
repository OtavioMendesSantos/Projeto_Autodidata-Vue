const { createApp, ref, computed } = Vue;
const app = createApp({
    setup() {
        //one way data binding
        const cart = ref(0);
        function addToCart() {
            cart.value++;
        }
        return {
            cart,
            addToCart,
        };
    },
});