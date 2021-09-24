<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">
                                About
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/todos" class="nav-link">
                                Todos
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/employees" class="nav-link">
                                Employees
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/vue-learning" class="nav-link">
                                Vue Learning
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>