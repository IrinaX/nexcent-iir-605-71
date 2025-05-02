<script setup>
import VPromo from '../components/VPromo.vue'
import VClients from '../components/VClients.vue'
import VManage from '../components/VManage.vue'
import VAchievements from '../components/VAchievements.vue'
import VCustomer from '../components/VCustomer.vue'
import VCta from '../components/VCta.vue'
import VUnlock from "@/components/VUnlock.vue";
import ManageSwiper from "@/components/ManageSwiper.vue";
</script>

<template>
    <main>
        <VPromo/>
        <VClients/>
        <VManage/>
        <ManageSwiper/>
        <VUnlock />
        <VAchievements/>
        <VCustomer/>
        <VCta/>
    </main>
</template>
