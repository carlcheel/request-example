const AppDataService = require('./appDataService');

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