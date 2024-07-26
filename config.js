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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_18_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMyxcbiAgICAgICAgNixcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY0LFxuICAgICAgICA2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ3LFxuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICA4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDUwLFxuICAgICAgICA5NCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDUxLFxuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgOCxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDkxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE1LFxuICAgICAgICA4NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInExOUhyNFNRMnVsWEJ6dzVjUHJYQ2RBS2FuK1dSRjc5VFBRZ1FWWWo0MmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZTMC1RNlNRU3ZlZUxBOHUxVHIzRGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDEwNWNiMjAtZWExYy00ZTY4LWI5YmYtZTBiYTBkYzlkMzNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDE5NSxcbiAgICAgIDE4LFxuICAgICAgMTE0LFxuICAgICAgMTY4LFxuICAgICAgNjgsXG4gICAgICA3OSxcbiAgICAgIDgsXG4gICAgICAyOSxcbiAgICAgIDExOSxcbiAgICAgIDksXG4gICAgICAzMyxcbiAgICAgIDE3NCxcbiAgICAgIDEyNSxcbiAgICAgIDE0NixcbiAgICAgIDM1LFxuICAgICAgMTg5LFxuICAgICAgMjMsXG4gICAgICA2MCxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDI0LFxuICAgICAgMTQzLFxuICAgICAgMjE3LFxuICAgICAgMTI2LFxuICAgICAgMTc5LFxuICAgICAgMTYxLFxuICAgICAgMjExLFxuICAgICAgMTc3LFxuICAgICAgMTYzLFxuICAgICAgOSxcbiAgICAgIDEzOSxcbiAgICAgIDEyMCxcbiAgICAgIDMyLFxuICAgICAgMTI5LFxuICAgICAgMjE3LFxuICAgICAgMTMxLFxuICAgICAgNTQsXG4gICAgICAyNTUsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVFRRERIVjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYxNTY1NzQxOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzk3NzQyNTM1NjQxNTU6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0c2MjQ4R0VQYXFqTFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0b29kR29jalIvcE1NSkRIdnM5czZNcUFtdjVXU1FROFdma2VOTTgvb1M4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9wNVBoKzl5M1dSR1VQWkVRRmhEVllENHBSNkZZcmZTaW9McmxobmxtRjF0TmpxREFudFM4RDNRRjZIbWUzZ2U3UG5vOXpBdXp1b1NkRlZnbXNUV0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVwM2djTStkMDVrNUg4RmpSYjI0ZU1sN09IZDhWYVdRMUphZTZPck55SWJ3YmVNKzI4ZWFwVm5sbmttaG1TUHJFZXkrOThySHhNMEkxWDVuT1NoZGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYxNTY1NzQxOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NjM4OTZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
