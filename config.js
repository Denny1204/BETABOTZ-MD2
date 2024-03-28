global.owner = ['6283866757153']  
global.mods = ['6285842647866'] 
global.prems = ['6283866757153']
global.nameowner = 'Katyusha'
global.numberowner = '6283866757153'
global.mail = 'kontol@gmail.com' 
global.gc = 'https://chat.whatsapp.com/IxMc9vbRXmu0yVcKYuQ1SH'
global.instagram = 'https://instagram.com/hashiro_97'
global.wm = '© Katyusha'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = '7bzibdIo' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'OgZzoDKr'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': '7bzibdIo', 
  'https://api.botcahx.eu.org': 'OgZzoDKr'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
