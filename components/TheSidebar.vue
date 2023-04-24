<template>
    <div class="bg-secondary-color text-white p-10 shadow-2xl h-screen space-y-5 font-['Rubik']">
        <img src="~/assets/images/klyutko-logo.svg" alt="">
        <input type="text" class="w-full bg-black border-2 border-muted-color rounded-lg">
        <nav class="flex flex-col gap-5">
            <NuxtLink to="/" active-class="text-hover-color"
                class="text-2xl flex items-center space-x-5 hover:bg-gray-color cursor-pointer p-3 rounded-lg duration-200">
                <Icon name="material-symbols:android-google-home" class="text-3xl" />
                <h1>Home</h1>
            </NuxtLink>
            <NuxtLink to="/search" active-class="text-hover-color"
                class="text-2xl flex items-center space-x-5 hover:bg-gray-color cursor-pointer p-3 rounded-lg duration-200">
                <Icon name="ic:sharp-search" class="text-3xl" />
                <h1>Search</h1>
            </NuxtLink>
            <NuxtLink to="/bookmarks" active-class="text-hover-color"
                class="text-2xl flex items-center space-x-5 hover:bg-gray-color cursor-pointer p-3 rounded-lg duration-200">
                <Icon name="bi:bookmark-heart-fill" class="text-3xl" />
                <h1>Bookmarks</h1>
            </NuxtLink>
        </nav>
        <hr class="border-gray-color">
        <h1 class="text-lg font-medium text-[#d4d4d4] uppercase tracking-widest">Сompilations</h1>
        <nav class="grid grid-cols-2 gap-5 break-words text-center">
            <NuxtLink
                class="space-y-3 text-xl max-w-[150px] hover:bg-gray-color cursor-pointer p-3 rounded-lg duration-200">
                <Icon name="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love"
                    size="50" />
                <h1>Recommend</h1>
            </NuxtLink>
            <NuxtLink
                class="space-y-3 text-xl max-w-[150px] hover:bg-gray-color cursor-pointer p-3 rounded-lg duration-200">
                <Icon name="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars"
                    size="50" />
                <h1>Top Rated</h1>
            </NuxtLink>
            <NuxtLink
                class="space-y-3 text-xl max-w-[150px] hover:bg-gray-color cursor-pointer p-3 rounded-lg duration-200">
                <Icon name="fa6-solid:infinity" size="50" />
                <h1>Upcoming</h1>
            </NuxtLink>
            <NuxtLink
                class="space-y-3 text-xl max-w-[150px] hover:bg-gray-color cursor-pointer p-3 rounded-lg duration-200">
                <Icon name="basil:fire-outline" size="50" />
                <h1>Looking now</h1>
            </NuxtLink>
        </nav>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>