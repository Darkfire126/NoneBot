const {Client, Intents, Collection} = require('discord.js')
const {promisify} = require('util')
const glob = require('glob')
const cf = require('../config.json')

const globPromise = promisify(glob)
const client = new Client({
ws: {
    intents: Intents.all
}

});

client.commands = new Collection()
client.events = new Collection()
client.cooldowns = new Collection()
client.aliases = new Collection()

;(async() => {
const Efiles = await globPromise(`${__dirname}/events/**/*.js`)
const Cfiles = await globPromise(`${__dirname}/commands/**/*.js`)

Efiles.map((value) => {
const f = require(value)
client.events.set(f.name, f)
client.on(f.name, f.run.bind(null, client))
})

Cfiles.map((value) => {
    const f = require(value)
    client.commands.set(f.name, f)
    if(f.aliases) {
        f.aliases.map((value) => client.aliases.set(value, f.name))
    }
    })
})();

client.login(cf.token)