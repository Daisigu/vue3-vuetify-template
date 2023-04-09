<template>
    <div class="header">
        <nav class="container">
            <ul>
                <li>
                    <router-link to="/">home</router-link>
                </li>
                <li>
                    <router-link to="/about">about</router-link>
                </li>
            </ul>
            <ul>
                <li>
                    <router-link to="/login">login</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.header {
    width: 100%;
    background-color: rgb(51, 146, 253);
    padding: .5rem;

    &>nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &>ul {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &>li {
                margin-right: 10px;

                &>a {
                    color: white;
                    text-decoration: none;

                    &:hover {
                        color: rgba(255, 255, 255, 0.527);
                    }
                }
            }
        }
    }
}
</style>