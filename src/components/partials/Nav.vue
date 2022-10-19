<template>
    <div class="nav card has-background-white">
        <div class="is-flex is-justify-content-space-between is-align-content-center">
            <div class="logo">
                <img src="../../assets/vue.png" class="icon" alt="logo" />
            </div>

            <div class="menu has-background-success-light">
                <router-link to="/" class=" has-text-primary">
                    <HomeIcon class="icon" />
                </router-link>
                <router-link to="/friends" class=" has-text-primary">
                    <UserGroupIcon class="icon" />
                </router-link>
                <router-link to="/profile" class=" has-text-primary">
                    <UserIcon class="icon" />
                </router-link>
                <router-link to="/settings" class=" has-text-primary">
                    <Cog8ToothIcon class="icon" />
                </router-link>
            </div>

            <div class="buttons">
                <a class="button font-12-sm is-primary">
                    <strong>Sign up</strong>
                </a>
                <a class="button font-12-sm is-light">
                    Log in
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {
    HomeIcon,
    UserIcon,
    UserGroupIcon,
    Cog8ToothIcon,
    BellIcon,
} from "@heroicons/vue/24/solid";
export default {
    name: 'Nav',
    components: {
        BellIcon,
        UserIcon,
        HomeIcon,
        UserGroupIcon,
        Cog8ToothIcon
    },
};
</script>

<style lang="scss" scoped>
.nav {
    z-index: 100;
    padding-block: 20px;
    padding-inline: 10px;
    width: 100%;

    a {
        font-weight: bold;
        color: #2c3e50;
    }
}

.menu {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;
    padding-inline: 10px;
    padding-top: 10px;
    padding-bottom: 5px;
}

.logo{
    border-radius: 20px;
    padding-inline: 10px;
    padding-top: 10px;
    padding-bottom: 5px;
}

@media screen and (max-width: 600px)  {
    .menu {
    position: absolute;
    left: 30%;
    transform: translate(-30%);
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;
    padding-inline: 10px;
    padding-top: 10px;
    padding-bottom: 5px;
}
}
</style>