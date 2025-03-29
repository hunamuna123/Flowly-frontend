export default defineNuxtRouteMiddleware((to, from) => {
	const authtoken = useCookie('authtoken').value;
  
	if (authtoken && authtoken.trim() !== '') {
	  return navigateTo('/');
	}
  });
  