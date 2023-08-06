<template>
    <section class="plans-section">
        <div class="inner">
            <h2>Choose a plan that works for you</h2>
            <div class="logo-plans-wrapper">
                <img src="/images/plan-logo.svg" alt="Press one africa logo" class="">
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
                    <li>
                        <p>Call Reception</p>
                    </li>
                    <li>
                        <p>Receive calls only</p>
                    </li>
                    <li>
                        <p>Receive and make calls</p>
                    </li>
                    <li>
                        <p class="end">Receive and make calls</p>
                    </li>
                </ul>
                <ul class="detail detail-unique">
                    <li>
                        <p>Calls per Week</p>
                    </li>
                    <li>
                        <p>Receive calls only</p>
                    </li>
                    <li>
                        <p>Receive and make calls</p>
                    </li>
                    <li>
                        <p class="end">You choose</p>
                    </li>
                </ul>
                <ul class="detail detail-default">
                    <li>
                        <p>Agents</p>
                    </li>
                    <li>
                        <p>Shared agents</p>
                    </li>
                    <li>
                        <p>Semi-dedicated agents</p>
                    </li>
                    <li>
                        <p class="end">Fully dedicated agents</p>
                    </li>
                </ul>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
// API was not working
// import useAxios from '../composables/useAxios';
const plans = ref<{
    id: number, name: string, amount: string, description: string, cta: string, call_reception: string, calls_per_week: string, agent: string
}[]>([
    {
        id: 1,
        name: "Starter Plan",
        amount: "25000",
        description: "For businesses with few customers",
        cta: "Subscribe Here",
        call_reception: "Receive calls only",
        calls_per_week: "Less than 30 calls per week",
        agent: "Shared agents"
    },
    {
        id: 2,
        name: "Growth Plan",
        amount: "50000",
        description: "For growing businesses",
        cta: "Subscribe Here",
        call_reception: "Receive and make calls",
        calls_per_week: "30 - 70 calls per week",
        agent: "Semi-dedicated agents"
    },
    {
        id: 3,
        name: "All Access",
        amount: "Custom",
        description: "For e-commerce and retail businesses",
        cta: "Calculate Your Cost",
        call_reception: "Receive and make calls",
        calls_per_week: "You choose",
        agent: "Fully dedicated agents"
    }])
    // API was not working
// const handleFetchPlans = async () => {
//     try {
//         const req = useAxios().get("/swQ1ic")
//         const res: any = await req
//         if (res.data) {
//             plans.value = res.data
//         }
//     } catch (err: any) {
//         console.log(err)
//     }

// }
onMounted(() => {
    // API was not working
    // handleFetchPlans()
})

</script>

<style scoped></style>