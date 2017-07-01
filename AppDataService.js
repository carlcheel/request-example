const Promise = require('bluebird');
const needle = require('needle');
const needleGetPromise = Promise.promisify(needle.get);

class AppDataService {
    apiCall() {
        return needleGetPromise('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.body;
            })
    }
}

module.exports = AppDataService;