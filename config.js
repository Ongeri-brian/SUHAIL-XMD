const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_29_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYxLFxuICAgICAgICA5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgODgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTMzLFxuICAgICAgICA2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg5LFxuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRzZPM3dzMkVMdVF6K2R0MFhDeHlnRHRBcVZlZ3VmdzVwalBKQVJxT3ZrQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLXpkMmFMa2lTLS1CZmdfYk9veHpyUVwiLFxuICBcInBob25lSWRcIjogXCI3YzkyNWZhZS03MDhjLTRkNGYtYmEyZS1lYjRjOTg3MTRjMzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAyMDksXG4gICAgICAxMixcbiAgICAgIDM1LFxuICAgICAgMjUsXG4gICAgICA0MCxcbiAgICAgIDY1LFxuICAgICAgNzcsXG4gICAgICAxNTksXG4gICAgICAxMTksXG4gICAgICAxMDcsXG4gICAgICAyNTMsXG4gICAgICAxNzksXG4gICAgICAyLFxuICAgICAgMjI3LFxuICAgICAgMTYwLFxuICAgICAgMCxcbiAgICAgIDIwMSxcbiAgICAgIDE5NyxcbiAgICAgIDI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICA2MCxcbiAgICAgIDE1LFxuICAgICAgMTAsXG4gICAgICAxMCxcbiAgICAgIDE3MCxcbiAgICAgIDE3NixcbiAgICAgIDIyNyxcbiAgICAgIDEyMixcbiAgICAgIDY0LFxuICAgICAgMjYsXG4gICAgICAxODYsXG4gICAgICAxODAsXG4gICAgICAxMzUsXG4gICAgICA1LFxuICAgICAgMTk3LFxuICAgICAgMjQ4LFxuICAgICAgMTY2LFxuICAgICAgMjAxLFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSks2M01FRkVLR0l1TGtHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQaWdXd29KUStWSjZXNFpTK3Q1emdoc29RZGdycHQ1UlppY3hCYlVDOHc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFFZHJHZGt1UXN6M0toWEsrZWlJOTFlZis0YTVaL1RIT0tSWUZ1VVhYODZ5VWxrdmxDUnZxYmNza3BJT3dTWHdUM0lJSTFKbThYRWw4QnUxcGxINENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhBN1p5cEJ6cWdvNVMxd2RZaExqRkNnQ0JySjZUNWNxV2YzTDhPL3FPakVuRjB3MG9LNXEwdlFpUzIrKytuOGhPVGNYVjkxNHdndVJ4WDFuL2NTUWdnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzEzMTQ1NjE4OjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MDkyNjk5NTA2MjgyOTo1NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxMzE0NTYxODo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDY4OTY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFEUUFBTTRxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNNHAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1Q1hUdFVGamJRWWtYbE5ySXRraWh5UldSQ3dyRGxmbWlKWVZCcVR6OHlvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0ODAwMDY5MzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTA1OTQ2NDY0OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU00ci5qc29uIjogIntcImtleURhdGFcIjpcIjVmNmZxazRaVHliazRBUytJVkZtcFNmTXZrNk1nZkM2K0xGUUJoajUrbzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ4MDAwNjkzMCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNNHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXNi9jZmVzSzFZTk9IcUpacURtZkhLcnNiODZEelkyeW1RQW5oUlM4UzJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0ODAwMDY5MzAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTA2Mzc0MTYzNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRFFBQU00cS5qc29uIjogIntcImtleURhdGFcIjpcIkMzbE1jeGlwS25Ob2x4aUVxQnA0dFdXL0p5cUNROCtORmRwTzkvRyt4QzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ4MDAwNjkzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNTJdfSxcInRpbWVzdGFtcFwiOlwiMTczMTA1OTUwODE1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Ongeri",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
