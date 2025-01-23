<template>
    <div class="text-center pa-4">
        <v-dialog v-model="props.dialog" max-width="400" persistent>
            <v-card>
                <!-- Conteúdo principal -->
                <v-card-text>
                    <v-text-field label="Title" v-model="props.task.title"></v-text-field>
                    <v-text-field label="Subtitle" v-model="props.task.subtitle"></v-text-field>
                </v-card-text>

                <!-- Ações -->
                <template v-slot:actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="$emit('toggle')">
                        Ok
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