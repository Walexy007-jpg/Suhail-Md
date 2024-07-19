const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_52_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjExLFxuICAgICAgICA4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg1LFxuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM4LFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiazJoTlg2a2YwUkhlWG1BRVBxRmlidHBWcGc2Z2tIS2RVLzhYbnF3VjR1dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTXpPYzE2YTZRNWFwVlhkdVc4R0JTZ1wiLFxuICBcInBob25lSWRcIjogXCI4NjVjM2U4Ny1jZmZmLTQyZWYtYWM1Zi00ZWQyMzIxNjdiMzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMyxcbiAgICAgIDcyLFxuICAgICAgMjA0LFxuICAgICAgMTEzLFxuICAgICAgMjQzLFxuICAgICAgMTgxLFxuICAgICAgMTE2LFxuICAgICAgNDAsXG4gICAgICA0OCxcbiAgICAgIDgwLFxuICAgICAgMjA0LFxuICAgICAgNTEsXG4gICAgICAzNixcbiAgICAgIDI0OCxcbiAgICAgIDI0NixcbiAgICAgIDEyNixcbiAgICAgIDE1MixcbiAgICAgIDI2LFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDE2NCxcbiAgICAgIDI0NCxcbiAgICAgIDUyLFxuICAgICAgMjAsXG4gICAgICAxNDcsXG4gICAgICAxNzEsXG4gICAgICAxOTMsXG4gICAgICAxNTYsXG4gICAgICA2LFxuICAgICAgOTUsXG4gICAgICA2NyxcbiAgICAgIDYxLFxuICAgICAgMTU2LFxuICAgICAgMTYsXG4gICAgICA5NyxcbiAgICAgIDIyMixcbiAgICAgIDUwLFxuICAgICAgNyxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQSFFCUUtORlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyNjYwODExNToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiV2FsZXh5IFRWXCIsXG4gICAgXCJsaWRcIjogXCIxMTA1Mzk1NzMzMzgyMjk6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPelpvNEVFRU9XSDY3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktXNDUva0dzL3FyZGdqWVJ2ZFpBU2lnYjBrQXBOWjdSMUdiTWgwaGRyRmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWVFlVWV4eGpuYWx0aUthT0xBN2g3aXpVY0NMMXdHZzhCN1JqcXpUb3RTVjJUY1dSRklGN3JIK2lVSFl3VVMzVXRkanR6dmhXMEZpODZMTm9pamJ0QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTzhqRzJEcmpibmpjTkw5TGZBYVJ3V2k2OW9KTzdWcUlVcllaUkJEL0FpbWFMWVBSNEwwRUdXK0NMMWtOQTlmT205MXh1Njl6TUZXakpQVzhaN0draGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyNjYwODExNToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDE4NzI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVZLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJVksuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzaVQyVHpuYkJGR2wvTTZJQVdUL1lVekJBUDhocTRIMjNzdTNJdVVUS21NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzY0MjM5MTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQxODczNDc5NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
