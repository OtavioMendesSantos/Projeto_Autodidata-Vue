<template>
    <div>
        <v-text-field label="Add Task" clearable :rules="rules" @keyup.enter="taskStore.addTask"
            v-model="taskStore.titleTaskCreating"></v-text-field>
        <list-tasks />
    </div>
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/stores/task';
import { onMounted } from 'vue';

const taskStore = useTaskStore();

const rules = [
    v => (!v || v && v.length >= 3) || v.length >= 3 || 'Title must be at least 3 characters',
    v => (!v || v && v.length <= 50) || 'Title must be less than 50 characters',
];

onMounted(() => {
    taskStore.getTasks();
})
</script>