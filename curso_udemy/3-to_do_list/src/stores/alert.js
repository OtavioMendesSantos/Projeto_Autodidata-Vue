import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
    state: () => ({
        showAlert: false,
    }),
    actions: {
        closeAlert() {
            this.showAlert = false;
        },
        showAlertMessage() {
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 3000);
        }
    }
})
