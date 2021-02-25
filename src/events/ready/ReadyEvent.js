const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    try { 
 console.log('Logging in nothing wrong so far')
 console.log('Hacking user systems...')
 console.log('Inited')
    } catch (e) {
console.log(e)
    }
    }
  }
