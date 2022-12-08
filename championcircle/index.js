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

  bot.command('chat', async (ctx) => {
    // Explicit usage
    console.log(await ctx.telegram.getChat(ctx.message.chat.id));
  
    // Using context shortcut
    // await ctx.leaveChat();
  });

  

//   bot.on('callback_query', async (ctx) => {

//     // const result = [{type: }];
//     // Explicit usage
//     // await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);
//     let val = ctx.callbackQuery.query;
//     await ctx.telegram.answerCallbackQuery("1","Hello");
//     // console.log("id",await ctx?.message?.chat.id);
//     // await ctx.telegram.sendMessage(ctx.message.chat.id, `Welcome to BuidlGuidl

//     console.log("val",val);
//     // Using context shortcut
  
//   // let a = val.match(/\b(\w+)\b/g);
//   // console.log("a",a);
//   //   if(val.startsWith("wei")){
//   //     console.log("is wei");
//   //     // await ctx.answerInlineQuery("LFG");
//   //   }
    
//     // 

// })

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

