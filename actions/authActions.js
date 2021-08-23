class AuthAction {
    async passwordlessStart(params) {
        // const ctx = process
        const res = await this.http('GET', 'users')
        const val = res.data
        console.log('====================================');
        console.log(val);
        console.log('====================================');
    }
}

const authAction = new AuthAction();
export default authAction;