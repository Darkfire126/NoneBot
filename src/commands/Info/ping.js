module.exports = {
    name: 'ping',
    category: 'Info',
    run: async(client, message, args) => {
        const msg = await message.channel.send('Pinging...')
        await msg.edit(`WS Ping: ${client.ws.ping}, message edit: ${msg.createdTimestamp - msg.createdTimestamp}`)
    },
    aliases: ['p'],
    cooldown: 3000
}