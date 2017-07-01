const Promise = require('bluebird');
const needle = require('needle');
const needleGetPromise = Promise.promisify(needle.get);

class AppDataService {
    apiCall() {
        let urls = ['https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/posts'];

        return Promise.map(urls, url => {
            return needleGetPromise(url)
                .then(response => {
                    return response.body;
                })
        })
        .then(results => {
            console.log(results);
        })
    }
}

module.exports = AppDataService;