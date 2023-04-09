

<script setup lang="ts">
import { useUsersStore } from "@/stores/users";
import { storeToRefs } from "pinia";

const usersStore = useUsersStore();
const { selectedUser } = storeToRefs(usersStore);
</script>
<template>
    <transition name="slide-fade">
        <div :key="selectedUser.name" v-if="selectedUser.id">
            <v-card-title>
                {{ selectedUser.name }}
            </v-card-title>
            <v-card-text>
                <div>Email: {{ selectedUser.email }}</div>
                <div>Phone: {{ selectedUser.phone }}</div>
            </v-card-text>
        </div>
    </transition>
</template>