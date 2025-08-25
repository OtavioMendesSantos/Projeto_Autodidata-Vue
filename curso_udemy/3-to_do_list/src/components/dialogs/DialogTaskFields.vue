<template>
    <div class="text-center pa-4">
        <v-dialog v-model="taskStore.showDialogEdit" max-width="400" persistent>
            <v-card title="Edit Task" prepend-icon="mdi-pencil">
                <!-- Conteúdo principal -->
                <v-card-text>
                    <v-text-field label="Title" v-model="props.task.title"></v-text-field>
                    <v-text-field label="Subtitle" v-model="props.task.subtitle"></v-text-field>
                </v-card-text>

                <!-- Ações -->
                <template v-slot:actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="taskStore.updateTask()" variant="elevated" color="primary">
                        Ok
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useTaskStore } from '@/stores/task';
const taskStore = useTaskStore();

const props = defineProps({
    task: Object
})

</script>