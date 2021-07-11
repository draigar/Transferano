export const state = () => ({
    isLoggedIn: false,
    user: [],
    failedLogin: false,
})

export const mutations = {
    setAuth(state, auth) {
        state.isLoggedIn = true,
        state.user = auth;
    },
    setFailedLogin(state, val) {
        state.failedLogin = val
    }
}