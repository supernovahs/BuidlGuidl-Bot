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
    let speedrunethereum = 'https://speedrunethereum.com';
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Welcome to the #5 Challenge of the ${speedrunethereum}
    \n
    About the Challenge: Create a Multi Sig wallet , which uses offChain signature(a.k.a meta txs) to sign transactions, and execute them on Chain.
    Learn about how signed message work, what is calldata .
    Next jump onto making the contracts, you can take inpiration from previous builders and ask questions here.

    Next, using the scaffold -eth stack, make the front end of your wallet and innovate as you like .
    Maybe social Recovery ?Snarks to verify your identity?

    Show off your build on ${website}
    Don't forget to subscribe to the BG Newsletter below
    Newsletter: ${newsletter}`);
  });
  
  bot.command('repo',async  (ctx) =>{
    let repo = ' https://github.com/scaffold-eth/scaffold-eth-examples/tree/signature-recover';
    await ctx.telegram.sendMessage(ctx.message.chat.id, `${repo}`)
  })
  bot.command('maas',async  (ctx) =>{
    let repo = 'https://github.com/austintgriffith/maas';
    await ctx.telegram.sendMessage(ctx.message.chat.id, `${repo}`)
  })
  bot.command('se',async  (ctx) =>{
    let repo = 'https://github.com/scaffold-eth/scaffold-eth';
    await ctx.telegram.sendMessage(ctx.message.chat.id, `${repo}`)
  })




  bot.launch();

