<template>
    <div>
        <v-text-field label="Add Task" @keyup.enter="taskStore.addTask"
            v-model="taskStore.titleTaskCreating"></v-text-field>
        <list-tasks />
    </div>
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/stores/task';
import { onMounted } from 'vue';

const taskStore = useTaskStore();

onMounted(() => {
    taskStore.getTasks();
})
</script>