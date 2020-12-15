exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╔════════════════════
║ *About ${BotName}*
╠════════════════════
║├≽️⚜ *AUTHOR*: Rizki Ridho Pratama 
║├≽️⚜ *DESIGNER*: Rizki Ridho Pratama 
║├≽️⚜ *YOUTUBE*: https://youtube.com/c/26RizkiRidhoPratama
╠════════════════════
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *YouTube <subscribe>*
║│ __https://youtube.com/c/26RizkiRidhoPratama
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY Rizki Ridho Pratama Bot*
╚════════════════════`
}
