
// Include discord.js ShardingManger
const { ShardingManager } = require('discord.js');

// Create your ShardingManger instance
const manager = new ShardingManager('./src/index.js', {
    // for ShardingManager options see:
    // https://discord.js.org/#/docs/main/v12/class/ShardingManager
    totalShards: 'auto',
    token: 'ODEyNTA2MzcyNDMxMTUxMTc0.YDBvhg.eHSI5sjMcR8Kn-X0hFDNAXU1jtE'
});

// Emitted when a shard is created
manager.on('shardCreate', (shard) => console.log(`Shard #${shard.id} launched`));

// Spawn your shards
manager.spawn();