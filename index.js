import { Composer } from 'grammy';

const bot = new Composer();

bot.command('start', (ctx) => {
	ctx.reply(`Hello, ${ctx.chat.first_name}!`);
});

export { bot };
