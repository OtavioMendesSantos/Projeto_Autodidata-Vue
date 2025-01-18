app.component("product-display", {
    setup() {
        const message = ref("Ola mundo!");
        const image = ref("./assets/images/t-shirt-blue.png");
        const product_title = ref("Blue T-shirt");
        const brand = "Vue Mastery";


        function changeProduct(product) {
            image.value = product.image;
            product_title.value = product.name;
        }

        // Propriedade Computada
        const titleWithBrand = computed(() => {
            return product_title.value + " - " + brand;
        });

        return {
            message,
            image,
            inStock: ref(Math.floor(Math.random() * 7)),
            datails: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    id: 1,
                    name: "Blue T-shirt",
                    color: "blue",
                    image: "./assets/images/t-shirt-blue.png",
                },
                {
                    id: 2,
                    name: "Green T-shirt",
                    color: "green",
                    image: "./assets/images/t-shirt-green.png",
                },
            ],
            changeProduct,
            titleWithBrand,
        };
    },
    template: `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image" srcset="" />
                </div>
                <div class="product-info">
                    <h1>{{ titleWithBrand }}</h1>
                    <p v-if="inStock > 5">In Stock</p>
                    <p v-else-if="inStock < 5 && inStock >= 1">Almost sold out</p>
                    <p v-else>Out of Stock</p>
                    <p>{{ inStock }}</p>
                    <ul>
                        <li v-for="detail in datails">{{detail}}</li>
                    </ul>
                    <div
                        v-for="variant in variants"
                        :key="variant.id"
                        v-on:mouseover="changeProduct(variant)"
                        class="color-circle"
                        :style="{ backgroundColor: variant.color }"
                    ></div>
                    <!-- Se for false, a classe n será aplicada ao botão -->
                    <!-- Emite um evento 'add-to-cart' que é 'ouvido' pelo componente pai e executa a funcao 'addToCart' -->
                    <button
                        class="button"                
                        @click="$emit('add-to-cart')"
                        :disabled="inStock < 1"
                        :class="{ disabledButton: inStock < 1 }"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    `
});