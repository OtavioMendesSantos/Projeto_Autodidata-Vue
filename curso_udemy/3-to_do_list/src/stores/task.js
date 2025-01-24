import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            {
                title: 'Task 1',
                subtitle: 'Subtask 1'
            },
            {
                title: 'Task 2',
                subtitle: 'Subtask 2'
            },
            {
                title: 'Task 3',
                subtitle: 'Subtask 3'
            },
        ],
        titleTaskCreating: '',
    }),
    actions: {
        addTask() {
            this.tasks.push({
                title: this.titleTaskCreating
            })
        }
    }
})
