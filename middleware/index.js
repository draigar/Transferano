export default function (ctx) {
    const path = ctx.route.path;
    const storedAuth = ctx.$cookies.get('transferano')
    if (storedAuth) {
        ctx.store.commit("auth/setAuth", storedAuth)
	}
	// else {
    //     if (path !== '/') {
    //         if (process.client) {
    //             window.onNuxtReady(() => {
    //                 window.$nuxt.$router.push('/')
    //             })
    //         } else {
    //             // console.log('needs logout');
    //             ctx.redirect('/')
    //         }
    //     }
    // }
}
