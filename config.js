module.exports = {
  dirBase : './database/db/prefixdata.db',
  prefix: 'rl!',
  categories: [{name: 'info', priority: 5}, {name: 'interaction', priority: 3}, {name: 'fun', priority: 2}, {name: 'images', priority: 1}, {name: 'NSFW', priority: 3}, {name: 'moderation', priority: 5}, {name: 'secret', priority: 2}, {name: 'rl', priority: 3}, {name: 'dbcmds', priority: 3}, {name: 'imgedit', priority: 3}],
  superusers: ['607571230303977493', '605371725118701584'],
  groups: [
    {name: 'user', permlvl: 0},
    {name: 'vip', permlvl: 1},
    {name: 'mod', permlvl: 2}, 
    {name: 'owner', permlvl: 3}]
  
}