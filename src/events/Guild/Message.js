const ms = require('ms')
module.exports = {
    name: 'message',
    run: async(client, message) => {
        const {MessageEmbed} = require('discord.js')
        if(message.author.bot || !message.content.toLowerCase().startsWith('rst ')) return;
        const [cmd, ...args] = message.content.trim().slice("rst ".length).split(/ +/g)
        const command = client.commands.get(cmd.toLowerCase()) || client.commands.get(client.aliases.get(cmd.toLowerCase()));
        if(!command) return
        if(client.cooldowns.has(`${message.author.id}-${command.name}`)) {
            return message.channel.send(`Try running this command in ${ms(client.cooldowns.get(`${message.author.id}-${command.name}`)- Date.now(), {long: true})}`)

        }
        try {
            await command.run(client, message, args)
            if(command.cooldown) {
                client.cooldowns.set(`${message.author.id}-${command.name}`, Date.now() + command.cooldown)
                setTimeout(() => {
client.cooldowns.delete(`${message.author.id}-${command.name}`)
                }, command.cooldown)
            }
        } catch (e) {
            const Ee = new MessageEmbed()
            Ee.setColor('RED')
            Ee.setTitle('New error')
            Ee.setDescription(`${e} is the error`)
            message.channel.send(Ee)
 return console.log(e)

        }
        }
    }
