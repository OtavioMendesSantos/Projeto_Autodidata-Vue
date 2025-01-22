<template>
    <div>
        <v-text-field label="Add Task" @keyup="addTask" v-model="task.title"></v-text-field>
        <v-list lines="three" select-strategy="classic">
            <v-list-subheader>Tasks</v-list-subheader>
            <v-list-item v-for="(task, index) in tasks" :key="index" :subtitle="task.subtitle" :title="task.title"
                :value="index">
                <template v-slot:prepend="{ isSelected }">
                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
                    </v-list-item-action>
                </template>
            </v-list-item>
        </v-list>
    </div>
</template>

<script setup>
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