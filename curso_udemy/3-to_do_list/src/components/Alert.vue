<template>
    <div class="alert-notification">
        <v-alert closable @click:close="alertStore.closeAlert()" text="Task created successfully!" title="Success" type="success" />
    </div>
</template>

<script setup>  
import { useAlertStore } from '@/stores/alert';
const alertStore = useAlertStore();

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