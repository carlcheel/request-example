const Promise = require('bluebird');
const needle = require('needle');

class AppDataServiceCallback {
    apiCall() {
        return new Promise((resolve, reject) => {
            needle.get('https://jsonplaceholder.typicode.com/users', (err, resp) => {
                if (err) {
                    reject(resp.body);
                }
                resolve(resp.body);
            });
        });

    }
}

module.exports = AppDataServiceCallback;