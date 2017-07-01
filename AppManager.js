const AppDataService = require('./AppDataService');

class AppManager {
    getSomeData() {
        const dataService = new AppDataService();
        return dataService.apiCall()
            .then(response => {
                console.log(response);
            });
    }
}

module.exports = AppManager