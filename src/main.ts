import {createApp} from 'vue'
import App from './App.vue'

import {setupStore} from "@/stores/counter";
import {initAppConfigStore} from "@/logics/initAppConfig";

bootstrap();

function bootstrap() {
  const app = createApp(App);
  //配置 store
  setupStore(app);
  //初始化系统内置设置
  initAppConfigStore();
  
  
  app.mount('#app')
}
