import { createApp } from 'vue';
import App from './App.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const app = createApp(App);

// Register the PrimeVue components
app.component('Button', Button);
app.component('InputText', InputText);

app.mount('#app');