<template>
    <section class="what-you-get">
        <img src="../assets/images/bg-element-1.svg" alt="" class="bg-element-1">
        <img src="../assets/images/bg-element-2.svg" alt="" class="bg-element-2">
        <div class="inner">
            <h2>What you get</h2>
            <div class="card-container">
                <div class="card-wrapper" v-for="(item, idx) in whatYouget" :key="idx">
                    <div class="bg-inner" :class="item.class"></div>
                    <div class="icon-wrapper">
                        <div class="inner" :class="item.class == 'sales' ? 'sales': 'customer'">
                            <customer-icon class="benefit-icon" v-if="item.class == 'customer'" />
                            <sales-icon class="sales-icon" v-if="item.class == 'sales'"/>
                        </div>
                    </div>
                    <div class="card-details">
                        <h3>{{ item.title }}</h3>
                        <ul class="details-wrapper" :class="item.class == 'sales' ? 'sales': 'customer'">
                            <li class="detail" v-for="(i, index) in item.details" :key="index">
                            <img src="../assets/images/sales-marker.svg" alt="" v-if="item.class == 'sales'">
                            <img src="../assets/images/customer-marker.svg" alt="" v-if="item.class == 'customer'">

                                <p>{{ i }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import SalesIcon from '../assets/icons/sales-icon.vue'
import CustomerIcon from '../assets/icons/customer-icon.vue'
import { whatYouget } from '../composables/usePageData';

</script>

<style scoped></style>