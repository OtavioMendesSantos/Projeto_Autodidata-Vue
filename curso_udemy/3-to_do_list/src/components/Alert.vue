<template>
    <div class="alert-notification">
        <v-alert class="animate__animated animate__fadeIn animate__faster" closable @click:close="handleClose"
            text="Task created successfully!" title="Success" type="success" />
    </div>
</template>

<script setup>
import { useAlertStore } from '@/stores/alert';
import "animate.css";

const alertStore = useAlertStore();

function handleClose() {
    alertStore.closeAlert();
}

</script>

<style scoped>
.alert-notification {
    position: fixed;
    bottom: 20px;
    width: 100%;
    z-index: 1000;
    padding: 20px
}
</style>
