import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
    state: () => ({
        showAlert: false,
        type: "",
        message: ""
    }),
    actions: {
        closeAlert() {
            this.showAlert = false;
            this.type = "";
            this.message = "";
        },
        showAlertMessage(type, message) {
            this.showAlert = true;
            this.type = type;
            this.message = message;
            setTimeout(() => {
                this.closeAlert();
            }, 3000);
        }
    }
})
