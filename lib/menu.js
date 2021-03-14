exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
MAU PASANG IKLAN DI BOT RIZKI RIDHO PRATAMA?
WHATSAPP : https://wa.me/6287840411119

IKLAN:
📺 SUBSCRIBE CHANNEL 26. Rizki Ridho Pratama📺

DONASI AGAR BOT BISA AKTIF TERUS.
GUNAKAN BOT DENGAN BIJAK!

╔════════════════════
║ *FITUR BOT ${BotName}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *.sticker*
║│CONTOH: KIRIM FOTO KAMU DENGAN CAPTION
║│".sticker"
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *.wiki* <query>Wikipedia.
║│2. *.nulis* <teks> (FITUR NULIS SEDANG DALAM PERBAIKAN)
║│3. *.quran*
║│4. *.pantun*
║│5. *.nama* <nama anda>
║│6. *.pasangan* <Aris & Cahya>
║│7. *.lirik* <nama lagu>
║│8. *.chord* <nama lagu>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *.creator*
║│2. *.owner*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *#info*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *.tts* <teks>
║│2. *.quotes*
║│3. *#donasi*
║│4. *.loli*
║│5. *.fotoanime*
║│6. *.infoig* <@rizki_ridho636>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *YouTube <subscribe>*
║│ https://youtube.com/c/26RizkiRidhoPratama
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ 
║╰───────────
╠════════════════════
║ *MADE BY RIZKY RIDHO PRATAMA*
╚════════════════════`
}
