class Response {
    set = async (props) => {
        const {status,res,data,message} = props;
        try {
            await res.status(status).json({
                status: true,
                message: message,
                data: data
            })
        } catch (e) {
            console.log(e)
            return;
        }
    }
}
const response = new Response();
module.exports = response;