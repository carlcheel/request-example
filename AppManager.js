const AppDataService = require('./appDataService');

class AppManager {
    getSomeData() {
        const dataService = new AppDataService();
        return dataService.apiCall();
    }
}

module.exports = AppManager