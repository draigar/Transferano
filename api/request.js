var axios =  require('axios');
var Response = require('./response');
class Request {
    get = async (res, url, options = {}) => {
        const props = {
            status: 200,
            res: res,
            message: 'Fetching a get request from ' + url
        }
        Response.set(props)
    }
    post = async (res, url, options = {}) => {
        const props = {
            status: 200,
            res: res,
            message: 'Fetching a post request from ' + url
        }
        Response.set(props)
    }
}

const Reqres = new Request();
module.exports = Reqres;