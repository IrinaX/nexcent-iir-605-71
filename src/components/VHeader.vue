<script setup>
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg py-3 fixed-top bg-white">
            <div class="container">
                <a class="navbar-brand flex-grow-1" href="#">
                    <img src="@/assets/img/logo.svg" alt="Nexcent">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" id="nav-icon4">
                        <span></span>
                        <span></span>
                        <span></span>
                </button>
                <div class="collapse navbar-collapse flex-grow-2 justify-content-between" id="navbarSupportedContent">
                    <ul class="navbar-nav gap-2 gap-lg-3 gap-xl-5 mb-3 mb-lg-0 text-center text-lg-start">
                        <li class="nav-item desktop-navigation__list-element_active">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Feature</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Product</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Testimonial</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">FAQ</a>
                        </li>
                    </ul>
                    <div class="desktop-navigation__buttons flex-column flex-lg-row">
                        <button class="button_light-sm">Login</button>
                        <button class="button_primary-sm">Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped></style>
