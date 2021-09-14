<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <router-link to="/" class="navbar-brand">
                    Logo
                </router-link>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link to="/" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">
                                About
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>