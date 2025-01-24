<template>
    <div>
        <v-text-field label="Add Task" @keyup.enter="taskStore.addTask" v-model="taskStore.titleTaskCreating"></v-text-field>
        <list-tasks :tasks="taskStore.tasks" />
    </div>
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();
</script>