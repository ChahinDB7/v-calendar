import { createApp } from 'vue';
import App from './App.vue';

// Import your plugin and styles
import VCalendar from './plugin';

// Create the app instance
const app = createApp(App);

// Use the plugin with the app instance
app.use(VCalendar);

// Mount the app
app.mount('#app');