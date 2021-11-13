const {developerId} = require('../config.json');
/**
 * @param {String} devId is developer ID we're checking in the config
 * @return {Boolean} true or false
 */
function checkIfDeveloper(devId) {
  return devId === developerId;
}
module.exports = {checkIfDeveloper};
