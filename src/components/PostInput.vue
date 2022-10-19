<template>
    <div class="card">
        <div class="is-flex is-justify-content-space-evenly is-align-items-center card-components border-bottom">
            <img src="../assets/001.png" alt="okk" class="icon cursor-pointer" loading="lazy" />
            <form class="input-form" @submit.prevent="onSubmit">
                <input type="text" placeholder="`what's on your mind?`" class="input" v-model.trim="message" />
            </form>
        </div>
        <div class="is-flex is-justify-content-space-evenly card-components">
            <div class="inputIcon is-flex cursor-pointer button is-white">
                <VideoCameraIcon class="icon has-text-danger" />
                <p class="mobile-hide">Live Video</p>
            </div>
            <div class="inputIcon is-flex cursor-pointer button is-white" @click="$refs.filepickerRef.click()">
                <CameraIcon class="icon has-text-success" />
                <p class="mobile-hide">Photo/Video</p>
                <input ref="filepickerRef" type="file" accept="image/png, image/gif, image/jpeg" class="hidden"
                    @change="addImageToPost($event)" />
            </div>
            <div class="inputIcon is-flex cursor-pointer button is-white">
                <FaceSmileIcon class="icon has-text-warning" />
                <p class="mobile-hide">Feeling/Activity</p>
            </div>
            <div class="hidden is-flex is-justify-content-center is-align-items-center cursor-pointer"
                v-if="imageToPost" @click="removeImage">
                <img :src="imageToPost" class="icon" />
                <p class="has-text-danger font-8">x</p>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from 'axios'
import { FaceSmileIcon } from "@heroicons/vue/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/vue/24/solid";
export default {
    setup() {
        const user = ref(null);
        const filepickerRef = ref(null);
        const imageToPost = ref(null);
        const message = ref("");
        const getAll  = ref();
        onMounted(() => {
            console.log("pp-=>",getAll.value)
            user.value = JSON.parse(localStorage.getItem("user"));
        });
        const onSubmit = () => {
            if (message.value === "") return;
            const data = {
                message: message.value,
                name: "",
                email: "",
                image_url: "",
                uid: "",
                timestamp: new Date,
                postImage: imageToPost.value
            }; 
            //api
            console.log("submit", data)
            axios
                .post('https://62f38b87a84d8c9681261221.mockapi.io/pokemon-data/getCard', data)
                .then((response) => {
                    console.log("res", response);
                    removeImage();
                    message.value = "";
                    
                })
                .catch((err) => { console.log("err", err) })
        };
        const addImageToPost = (e) => {
            const reader = new FileReader();
            if (e.target.files[0]) {
                reader.readAsDataURL(e.target.files[0]);
            }
            reader.onload = (readerEvent) => {
                imageToPost.value = readerEvent.target.result;
            };
        };
        const removeImage = () => (imageToPost.value = null);
        return {
            user,
            message,
            onSubmit,
            addImageToPost,
            filepickerRef,
            imageToPost,
            removeImage,
            // childComponentRef,
        };
    },
    components: {
        FaceSmileIcon,
        CameraIcon,
        VideoCameraIcon,
    },
};
</script>
<style lang="scss" scoped>
.card {
    width: 550px;
    background-color: #fff;
    height: 120px;
    border-radius: 20px;
    display: grid;
    margin: auto;
    margin-top: 20px;
}

@media screen and (max-width: 600px) {
    .card {
        width: 350px;
        background-color: #fff;
        height: 120px;
        border-radius: 20px;
        display: grid;
        margin: auto;
        margin-top: 20px;
    }
}

.input-form {
    width: 80%;
}

.hidden {
    display: none;
}

.card-components {
    padding: 10px;
}

.border-bottom {
    border-bottom: 1px solid lightgray;
}

@media screen and (max-width: 600px) {
    .mobile-hide {
        display: none;
    }

}
</style>