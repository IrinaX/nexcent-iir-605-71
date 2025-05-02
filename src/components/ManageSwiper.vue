<script setup>
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {onMounted, ref} from "vue";

const manageSwiper = ref();
// init Swiper:

onMounted(() => {
    const swiper = new Swiper(manageSwiper.value, {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        breakpoints: {
            0: {
                slidesPerView: 1.1,
                spaceBetween: 24,
                centeredSlides: true
            },
            740: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: false
            },
            1152: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})
</script>

<template>
    <section class="manage">
        <div class="container">
            <h2>
                Manage your entire community <br> in a single system
            </h2>
            <p class="manage__subtitle">
                Who is Nextcent suitable for?
            </p>
            <!-- Slider main container -->
            <div class="swiper" ref="manageSwiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <div class="manage__card h-100">
                            <div class="manage__card-icon">
                                <img src="@/assets/img/manage-1.svg" alt="">
                            </div>
                            <h4>
                                Membership Organisations
                            </h4>
                            <p>
                                Our membership management software provides full automation of membership renewals and
                                payments
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="manage__card h-100">
                            <div class="manage__card-icon">
                                <img src="@/assets/img/manage-2.svg" alt="">
                            </div>
                            <h4>
                                National Associations
                            </h4>
                            <p>
                                Our membership management software provides full automation of membership renewals and
                                payments
                            </p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="manage__card h-100">
                            <div class="manage__card-icon">
                                <img src="@/assets/img/manage-3.svg" alt="">
                            </div>
                            <h4>
                                Clubs & Groups
                            </h4>
                            <p>
                                Our membership management software provides full automation of membership renewals and
                                payments
                            </p>
                        </div>
                    </div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <!-- If we need scrollbar -->
                <div class="swiper-scrollbar"></div>
            </div>
        </div>
    </section>
</template>
<style>
.swiper{
    padding: 50px;
}
.swiper-slide{
    height: auto;
}
</style>
