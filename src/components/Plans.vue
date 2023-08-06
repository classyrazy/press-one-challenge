<template>
    <section class="plans-section">
        <div class="inner">
            <h2>Choose a plan that works for you</h2>
            <div class="logo-plans-wrapper">
                <img src="../assets/images/plan-logo.svg" alt="Press one africa logo" class="">
                <div class="plans-wrapper">
                    <div class="plan-wrapper" v-for="item in plans" :key="item.id">
                        <div class="details">
                            <p class="name">{{ item.name }}</p>
                            <h3>{{ item.amount }} <span>/ month</span></h3>
                            <p class="description">{{ item.description }}</p>
                        </div>
                        <a href="#" class="btn primary-btn">{{ item.cta }}</a>
                    </div>
                </div>
            </div>
            <div class="plan-details">
                <ul class="detail detail-default">
                    <li><p>Call Reception</p></li>
                    <li><p>Receive calls only</p></li>
                    <li><p>Receive and make calls</p></li>
                    <li><p class="end">Receive and make calls</p></li>
                </ul>
                <ul class="detail detail-unique">
                    <li><p>Calls per Week</p></li>
                    <li><p>Receive calls only</p></li>
                    <li><p>Receive and make calls</p></li>
                    <li><p class="end">You choose</p></li>
                </ul>
                <ul class="detail detail-default">
                    <li><p>Agents</p></li>
                    <li><p>Shared agents</p></li>
                    <li><p>Semi-dedicated agents</p></li>
                    <li><p class="end">Fully dedicated agents</p></li>
                </ul>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useAxios from '../composables/useAxios';
const plans = ref([])
const handleFetchPlans = async() => {
    try {
            const req = useAxios().get("/swQ1ic")
            const res = await req
            if (res.data) {
               plans.value = res.data
            }
        } catch (err: any) {
            console.log(err) 
        }

}
onMounted(() => {
    handleFetchPlans()
})

</script>

<style scoped></style>