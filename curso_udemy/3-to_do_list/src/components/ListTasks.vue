<template>
    <v-list lines="three" select-strategy="classic">
        <v-list-subheader>Tasks</v-list-subheader>
        <v-list-item v-for="(task, index) in props.tasks" :key="index" :subtitle="task.subtitle" :title="task.title"
            :value="index">
            <template v-slot:prepend="{ isSelected }">
                <v-list-item-action start>
                    <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
                </v-list-item-action>
            </template>
            <template v-slot:append>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" icon="mdi-dots-vertical" v-bind="props" variant="plain"></v-btn>
                    </template>
                    <v-list>
                        <v-list-item value="1">
                            <v-list-item-title>Editar</v-list-item-title>
                        </v-list-item>
                        <v-list-item value="2">
                            <v-list-item-title>Deletar</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-list-item>
    </v-list>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    tasks: Object
})
</script>