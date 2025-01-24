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
        showDialogDelete: false,
        showDialogEdit: false,

        indexTaskSelected: 0,
    }),
    actions: {
        addTask() {
            this.tasks.push({
                title: this.titleTaskCreating
            });
            this.titleTaskCreating = '';
        },
        toggleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete;
            if (index != null) this.indexTaskSelected = index;
        },
        deleteTask() {
            this.tasks.splice(this.indexTaskSelected, 1);
            this.toggleDelete();
        },
        toggleEdit(index) {
            this.showDialogEdit = !this.showDialogEdit;
            if (index != null) this.indexTaskSelected = index;
        }
        
    }
})
