document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
 const questions=[
 {q:'Apakah maksud Zaman Prasejarah?',opts:['Zaman sebelum manusia mengenal sistem tulisan','Zaman selepas penciptaan komputer','Zaman apabila semua manusia tinggal di bandar'],a:0,why:'Zaman Prasejarah merujuk tempoh sebelum wujudnya sistem tulisan.'},
 {q:'Mengapakah ahli arkeologi mengkaji artifak?',opts:['Untuk meneka tanpa bukti','Untuk mendapatkan petunjuk tentang kehidupan manusia dahulu','Untuk menggantikan semua sumber sejarah'],a:1,why:'Artifak ialah bukti material yang boleh membantu kita membuat inferens tentang kehidupan lampau.'},
 {q:'Apakah tindakan paling baik apabila membuat kesimpulan daripada artifak?',opts:['Menerima apa-apa jawapan tanpa semakan','Menyokong kesimpulan dengan ciri artifak dan sumber yang boleh dipercayai','Mengabaikan bukti yang bercanggah'],a:1,why:'Kesimpulan sejarah perlu disokong oleh bukti dan ditafsir dengan berhati-hati.'},
 {q:'Antara berikut, yang manakah menunjukkan perubahan teknologi?',opts:['Alat batu dibandingkan dengan alat moden','Warna latar slaid','Nama menu laman web'],a:0,why:'Membandingkan alat batu dengan alat moden membantu murid melihat perubahan teknologi.'},
 {q:'Jika gambar artifak tidak mempunyai sumber yang jelas, apakah tindakan sesuai?',opts:['Terus gunakannya tanpa semakan','Semak sumber dan kebenaran penggunaan sebelum menggunakannya','Padam nama pencipta jika ada'],a:1,why:'Semakan sumber dan hak cipta ialah amalan etika digital yang penting.'}
 ];
 const host=document.getElementById('quiz');
 if(host){
   let answers={};
   host.innerHTML=questions.map((q,i)=>`<section class="quiz-question" data-q="${i}"><h3>${i+1}. ${q.q}</h3>${q.opts.map((o,j)=>`<button class="option" type="button" data-q="${i}" data-a="${j}">${String.fromCharCode(65+j)}. ${o}</button>`).join('')}<div class="feedback" id="fb-${i}" aria-live="polite"></div></section>`).join('');
   host.querySelectorAll('.option').forEach(b=>b.addEventListener('click',()=>{let q=+b.dataset.q,a=+b.dataset.a;answers[q]=a;host.querySelectorAll(`[data-q="${q}"] .option`).forEach(()=>{});host.querySelectorAll(`button.option[data-q="${q}"]`).forEach(x=>x.classList.toggle('selected',x===b));document.getElementById(`fb-${q}`).textContent='Jawapan dipilih. Tekan “Semak Jawapan” untuk melihat maklum balas.';}));
   document.getElementById('checkQuiz').addEventListener('click',()=>{let score=0;questions.forEach((q,i)=>{let fb=document.getElementById(`fb-${i}`);if(answers[i]===q.a){score++;fb.textContent='Betul! '+q.why;fb.style.color='#7df5c5'}else{fb.textContent=(answers[i]===undefined?'Belum dijawab. ':'Belum tepat. ')+q.why;fb.style.color='#ffd66b'}});let result=document.getElementById('quizResult');result.hidden=false;result.innerHTML=`<h2>Keputusan: ${score}/${questions.length}</h2><p>${score===questions.length?'Cemerlang! Semua jawapan tepat.':score>=3?'Bagus! Semak maklum balas dan cuba lagi.':'Teruskan usaha. Baca semula modul dan cuba sekali lagi.'}</p><button class="btn" onclick="location.reload()">Cuba Semula</button>`;result.scrollIntoView({behavior:'smooth',block:'center'});});
 }
 const feedbackForm=document.getElementById('feedbackForm');
 if(feedbackForm) feedbackForm.addEventListener('submit',e=>{e.preventDefault();document.getElementById('feedbackNotice').textContent='Terima kasih! Refleksi anda dipaparkan pada halaman ini sahaja dan tidak dihantar ke pangkalan data.';});
});
