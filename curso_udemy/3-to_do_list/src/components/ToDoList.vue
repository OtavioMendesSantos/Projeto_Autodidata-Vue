<template>
    <div>
        <v-text-field label="Add Task" @keyup="addTask" v-model="task.title"></v-text-field>
        <list-tasks :tasks="tasks" />
    </div>
</template>

<script setup>
import ListTasks from './ListTasks.vue';

import { ref } from 'vue';

const task = ref({ title: '', subtitle: '' });
const tasks = ref([])

function addTask(e) {
    if (e.key !== 'Enter') return;
    tasks.value.push({
        title: task.value.title,
        subtitle: task.value.subtitle,
    });
    task.value.title = '';
    task.value.subtitle = '';
}

</script>