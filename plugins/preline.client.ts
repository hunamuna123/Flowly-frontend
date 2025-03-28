import { useRouter } from "vue-router";
import("../node_modules/preline/dist");

export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.afterEach(async () => {
    setTimeout(() => window.HSStaticMethods.autoInit());
  });
});