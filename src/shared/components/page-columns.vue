<template>
    <div class="page-columns">
        <v-card class="col-4">
            <slot name="left-col" />
        </v-card>
        <v-card class="col-8">
            <slot name="right-col" />
        </v-card>
    </div>
</template>

<style lang="scss" scoped>
.page-columns {
    display: flex;
    width: 100%;
    gap: 10px
}
</style>