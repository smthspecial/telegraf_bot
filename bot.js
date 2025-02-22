const Telegraf = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.telegram.setWebhook('arn:aws:lambda:us-east-1:190256128606:function:Lamda_for_Telegram_bot')

bot.startWebhook('arn:aws:lambda:us-east-1:190256128606:function:Lamda_for_Telegram_bot')