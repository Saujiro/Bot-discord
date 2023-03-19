module.exports = {
    token: 'MTAwNTI3OTA2NDEzNjg4NDI3NA.GufT5Y.DMefpIXRG1eNElwpy-rk1XF5vMB3i-nXs6gjlk', //Token du bot
    botId: 'XXXXXXXXXXXXXXXXXX', //Id du bot
    owner: 'XXXXXXXXXXXXXXXXXX', //Id du Propriétaire
    prefix: '!',//Prefix du bot
    embed: {
        color: 'AQUA', //Embed Color
        footer: 'Template by Sôjiro#5077' //Embed Footer
    },
    plugin: {
        server: '1086983730956079224',//Id du serveur
        welcome: {
            enabled: true,// true = plugin activé || false = plugin desactivé
            channel: 'XXXXXXXXXXXXXXXXXX',//id du channel de bienvenue
            log: true// true = log activé || false = log desactivé
        },
        leave: {
            enabled: true,// true = plugin activé || false = plugin desactivé
            channel: 'XXXXXXXXXXXXXXXXXX',//Id du channel de leave
            log: true// true = log activé || false = log desactivé
        },
        autoRole:{
            enabled: true,// true = plugin activé || false = plugin desactivé
            role: 'XXXXXXXXXXXXXXXXXX',//Id du role
            log: true// true = log activé || false = log desactivé
        },
        log: {
            enabled: true,// true = plugin activé || false = plugin desactivé
            channel: 'XXXXXXXXXXXXXXXXXX'//Id du channel Logs
        }
    }
}
