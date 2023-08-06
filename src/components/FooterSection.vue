<template>
    <footer>
        <FooterBanner />
        <div class="main-footer-wrapper">
            <div class="main-footer-inner">
                <div class="inner">
                    <div class="left-part">
                        <img src="/logo.png" alt="page logo" />
                        <a href="mailto:hello@pressone.africa">hello@pressone.africa</a>
                        <a href="tel:+23413438962">+234 1 343 8962</a>
                        <ul class="icons">
                            <li><a href="#">
                                    <FacebookIcon />
                                </a></li>
                            <li><a href="#">
                                    <TwitterIcon />
                                </a></li>
                            <li><a href="#">
                                    <InstagramIcon />
                                </a></li>
                            <li><a href="#">
                                    <LinkedinIcon />
                                </a></li>
                        </ul>
                    </div>
                    <div class="middle-part">
                        <h4>Company</h4>
                        <ul class="footer-links">
                            <li><a href="#">Help & Support</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Media</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div class="right-part">
                        <h4>Address</h4>
                        <p>The Lennox Mall, 3 Admiralty Way,
                            Lekki Phase 1, Lagos</p>
                    </div>
                </div>
                <div class="botom-info">
                    <div class="left">
                        <p>© 2022 PressOne Africa</p>
                        <p>All rights reserved</p>
                    </div>
                    <div class="right">
                        <p>Terms & Agreement</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import LinkedinIcon from '../assets/icons/linkedin-icon.vue'
import InstagramIcon from '../assets/icons/instagram-icon.vue'
import TwitterIcon from '../assets/icons/twitter-icon.vue'
import FacebookIcon from '../assets/icons/facebook-icon.vue'
import FooterBanner from './FooterBanner.vue'

</script>

<style scoped></style>