
module.exports = {
    name: "ready",
    run: (client) => console.log(`Num Started`) +
     console.log('Init hacking ') +
      console.log('done') +

      client.user.setActivity('rst (with a space)', { type: 'LISTENING' }) +
      client.user.setStatus('idle')


}