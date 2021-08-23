export default function (ctx) {
    const path = ctx.route.path;
    const ip_address = !process.client && ctx.req.connection.remoteAddress
    const storedAuth = ctx.$cookies.get('transferano')
    const transferano_user = {
        ip_address: ip_address,
    }
    ctx.$cookies.set('transferano_user', transferano_user)
    // if (storedAuth) {
    //     ctx.store.commit("_auth/setAuth", storedAuth)
    //     if (process.client) {
    //         window.onNuxtReady(() => {
    //             window.$nuxt.$router.push('/app')
    //         })
    //     } else {
    //         ctx.redirect('/app')
    //     }
    // }
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
