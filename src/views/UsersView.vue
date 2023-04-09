<template>
  <div class="container">
    <h1>About</h1>
    <div class="about-content d-flex">
      <pageColumns>
        <template #left-col>
          <usersList />
        </template>
        <template #right-col>
          <usersDetails />
        </template>
      </pageColumns>
    </div>
  </div>
</template>

<script setup lang="ts">
import pageColumns from '@/shared/components/page-columns.vue';
import usersList from '@/features/users/users-list.vue';
import usersDetails from '@/features/users/users-details.vue';


</script>

<style lang="scss" scoped>
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
