"use strict";

const image = {
    emits: ['deleteImage'],
    props: {
        title: {
            required: true,
            type: String,
            validator(value) {
                return value.length > 0;
            }
        },
        src: {
            required: true,
            type: String,
            validator(value) {
                return value.length > 0;
            }
        }
    },
    template:
        `
        <p>{{ title }}</p>
        <img :src="src" :alt="title" alt="any img">
        <button @click="$emit('deleteImage', src)">Удалить изображение</button>
        `
};

let gallery = {
    components: {'app-img': image},
    data() {
        return {
            gallery: [
                {title: "Лошадь", src: "img/hors.jpg"},
                {title: "Лев", src: "img/leon.jpg"},
                {title: "Тигр", src: "img/tigr.jpg"},
                {title: "Волк", src: "img/wolf.jpg"},
            ],
            addingImage: {
                title: "", src: ""
            },
        }
    },
    methods: {
        deleteImage(src) {
            this.gallery = this.gallery.filter(
                image => {
                    return image.src !== src;
                })
        },
        addImage() {
            this.gallery.push({
                title: this.addingImage.title,
                src: this.addingImage.src
            });
            this.addingImage.title = "";
            this.addingImage.src = "";
        }
    },
    template:
        `
        <div v-for="image in gallery" class="item">
            <app-img :title="image.title" :src="image.src"
                     v-on:delete-image="deleteImage"></app-img>
        </div>
        <form @submit.prevent="addImage">
            <label>
                Введите название животного:
                <input type="text" :="addingImage.title">
            </label>
            <label>
                Укажите путь к картинке:
                <input type="text" :="addingImage.src">
            </label>
            <button type="submit">Добавить</button>
        </form>
        `
};

let app = Vue.createApp({
    components: {'app-gallery': gallery},
})

app.mount("#app");