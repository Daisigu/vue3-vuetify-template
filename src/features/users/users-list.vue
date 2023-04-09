

<script setup lang="ts">
import { useUsersStore } from "@/stores/users";
import { storeToRefs } from "pinia";
const usersStore = useUsersStore();
const { fetchUsers } = usersStore;
const { users, selectedUser, loading, searchValue } = storeToRefs(usersStore)
</script>
<template>
    <div class="btns mb-2">
        <v-btn :loading="loading" @click="fetchUsers" block class="text-none" color="blue">
            fetchUsers
        </v-btn>
    </div>
    <v-text-field v-model="searchValue" label="Поиск по фио" hide-details="auto"></v-text-field>
    <v-list v-if="users.length" lines="three" select-strategy="single-independent">
        <v-list-item v-for="user in users" :key="user.name" v-on:click="selectedUser = user"
            :active="selectedUser === user">
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>
                {{ user.phone }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
                {{ user.email }}
            </v-list-item-subtitle>
        </v-list-item>
    </v-list>
    <v-card v-else>
        <h2 class="text-center">No users found</h2>
    </v-card>
</template>