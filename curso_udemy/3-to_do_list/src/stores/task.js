import { defineStore } from 'pinia'
import { useAlertStore } from '@/stores/alert';

const alertStore = useAlertStore();

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
            console.log('Adding task:', this.titleTaskCreating);
            if (!this.titleTaskCreating || this.titleTaskCreating.length < 3 || this.titleTaskCreating.length > 50) return;
            this.tasks.push({
                title: this.titleTaskCreating
            });
            alertStore.showAlertMessage();
            this.titleTaskCreating = '';
            this.saveLocalData();
        },
        toggleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete;
            if (index != null) this.indexTaskSelected = index;
        },
        deleteTask() {
            this.tasks.splice(this.indexTaskSelected, 1);
            this.toggleDelete();
            this.saveLocalData();
        },
        toggleEdit(index) {
            this.showDialogEdit = !this.showDialogEdit;
            this.saveLocalData();
            if (index != null) this.indexTaskSelected = index;
        },
        saveLocalData() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        getTasks() {
            const items = localStorage.getItem('tasks')
            if (items) this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    }
})
