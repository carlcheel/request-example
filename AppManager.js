const AppDataServiceCallback = require('./AppDataServiceCallback');

class AppManager {
    getSomeData() {
        const dataService = new AppDataServiceCallback();
        return dataService.apiCall()
            .then(response => {
                console.log(response);
            });
    }
}

module.exports = AppManager