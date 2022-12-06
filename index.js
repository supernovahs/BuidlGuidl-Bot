import { Telegraf  } from 'telegraf';
import {message} from"telegraf/filters";
import * as dotenv from 'dotenv'
dotenv.config()
const bot = new Telegraf(process.env.BOT_TOKEN);


console.log("bot started",bot);
bot.command('quit', async (ctx) => {
    // Explicit usage
    await ctx.telegram.leaveChat(ctx.message.chat.id);
  
    // Using context shortcut
    await ctx.leaveChat();
  });

  bot.on('new_chat_members', async (ctx) => {
    // Explicit usage
    let website = 'https://buidlguidl.com';
    let newsletter = 'https://buildguidl.substack.com';
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Welcome to BuidlGuidl
    \n
    Buidl Guidl Website: ${website} \n
    Submit your builds and update your status. 
    Newsletter: ${newsletter} \n Latest Updates on the BG Shipping log`);
  });

  bot.launch();

