<template>
    <div class="text-center pa-4">
        <v-dialog v-model="props.dialog" max-width="400" persistent>
            <v-card prepend-icon="mdi-delete"
                text="Do you want to delete this task?"
                title="Delete task">
                <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <v-btn @click="$emit('toggleDelete')">
                        Cancel
                    </v-btn>

                    <v-btn @click="$emit('deleteTask')">
                        Confirm
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    dialog: Boolean,
    task: Object
})
</script>