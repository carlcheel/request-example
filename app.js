const AppManager = require('./AppManager');
const appManager = new AppManager();

appManager.getSomeData()
    .then(response => {
        console.log(response);
    })