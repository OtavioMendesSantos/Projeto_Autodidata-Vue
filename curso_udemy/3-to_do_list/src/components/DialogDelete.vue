<template>
    <div class="text-center pa-4">
        <v-dialog v-model="taskStore.showDialogDelete" max-width="400" persistent>
            <v-card prepend-icon="mdi-delete" text="Do you want to delete this task?" title="Delete task">
                <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <v-btn @click="taskStore.toggleDelete()">
                        Cancel
                    </v-btn>

                    <v-btn @click="taskStore.deleteTask()">
                        Confirm
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/task';
const taskStore = useTaskStore();
</script>