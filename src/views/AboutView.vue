<template>
  <div class="container">
    <h1>About</h1>
    <div class="about-content d-flex">
      <v-card class="col-4">
        <div class="btns mb-2">
          <v-btn :loading="loading" @click="fetchUsers" block class="text-none" color="blue">
            fetchUsers
          </v-btn>
        </div>
        <v-text-field v-model="searchValue" label="Поиск по фио" hide-details="auto"></v-text-field>
        <v-list v-if="users.length" lines="three" select-strategy="single-independent">
          <v-list-item :value="i" v-for="i in users" :key="i.name" v-on:click="seelctedUser = i"
            :active="seelctedUser === i">
            <v-list-item-title>{{ i.name }}</v-list-item-title>

            <v-list-item-subtitle>
              {{ i.phone }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ i.email }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-card v-else>
          <h2 class="text-center">No users found</h2>
        </v-card>
      </v-card>
      <v-card class="col-8">
        <transition name="slide-fade">
          <div :key="seelctedUser.name" v-if="seelctedUser.name">
            <v-card-title>
              {{ seelctedUser.name }}
            </v-card-title>
            <v-card-text>
              <div>Email: {{ seelctedUser.email }}</div>
              <div>Phone: {{ seelctedUser.phone }}</div>
            </v-card-text>
          </div>
        </transition>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { computed, ref, type ComputedRef } from "vue"
import type { Ref } from "vue"

interface User {
  name: string;
  phone: string;
  email: string;
}
const loading = ref(false);
const seelctedUser: Ref<User> = ref({
  name: "",
  phone: "",
  email: "",
})
const searchValue: Ref<string> = ref('')
const users: Ref<User[] | []> = ref([])
const fetchUsers = async () => {
  loading.value = true
  const { data } = await axios('https://jsonplaceholder.typicode.com/users')
  users.value = data
  loading.value = false
}
</script>

<style lang="scss" scoped>
.about-content {
  gap: 8px
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transition: all 0s ease;
  transform: translateX(20px);
  opacity: 0;
}
</style>
