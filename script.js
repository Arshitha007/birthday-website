// ===============================
// PERSONAL SETTINGS - EDIT THESE
// ===============================
const CONFIG={
 password:'Aneesheyy',
 friendName:'My Favorite Person',
 letter:`Dear My Favorite Person, ❤️

Life la nee ennaku unexpected ahh vantha person thaa,ana ipo aana ipo ennoda kutty heart la unnaku periya place iruku...🙌🏻
Enna care panna🩹, support panna🫂 and en kooda sanda👊🏻 poda nee eppovumae irundhirukaa.

Unna mathiri oru person friend ahh kedika naa kuduthu vechirukanum💯

Naa unna neriya hurt panni Irukaa,analum nee epavumae en kudatha iruthu irukaa.Sorry for everything...🥺

Enna vitu epavum poga matta nu nambura...🫴🏻Namba friendship college ooda mudiyama...end of life varikum intha bond continue aaganum✨ 

Thanks for being my caring person, my fighter and my truest friend💗

Nee epavum happy ahh iru ..🙌🏻
I will be always in your side as a true friend🫂

Love you always...💝

Once again Happy Birthday da thangoo🤌🏻.
`
};
const screens={password:document.getElementById('passwordScreen'),birthday:document.getElementById('birthdayScreen'),love:document.getElementById('loveWorldScreen'),letter:document.getElementById('letterScreen')};
const passwordForm=document.getElementById('passwordForm'),passwordInput=document.getElementById('passwordInput'),wrongMessage=document.getElementById('wrongMessage'),bgMusic=document.getElementById('bgMusic'),themeVideo=document.getElementById('themeVideo');
document.getElementById('friendName').textContent=CONFIG.friendName;
const wrongMessages=['Aww... that’s not the one. 🥺 Think about us and try again. ❤️','Nooo... your surprise is still waiting for you. 💔 Try once more.','Almost? Maybe not quite... I know you’ll remember it. 🥹💗','Don’t give up! One little secret is standing between you and the surprise. 🌹','I’m waiting... and this little world is waiting for you too. ❤️'];
let wrongAttempts=0,musicStarted=false;
function showScreen(s){Object.values(screens).forEach(x=>x.classList.remove('active'));s.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function startMusic(){if(musicStarted)return;musicStarted=true;bgMusic.volume=.38;bgMusic.play().catch(()=>{musicStarted=false;});document.getElementById('musicIcon').textContent='♫';document.getElementById('musicText').textContent='Music On';}
function createConfetti(){const c=document.getElementById('confetti');c.innerHTML='';for(let i=0;i<90;i++){const p=document.createElement('i');p.style.left=Math.random()*100+'%';p.style.top=Math.random()*20+'%';p.style.animationDelay=Math.random()*1.5+'s';p.style.animationDuration=2.4+Math.random()*2.2+'s';p.style.background=['#ff78b5','#ffd0e5','#c98cff','#ffffff','#ffcc70'][Math.floor(Math.random()*5)];c.appendChild(p)}}
passwordForm.addEventListener('submit',e=>{e.preventDefault();if(passwordInput.value.trim().toLowerCase()===CONFIG.password.toLowerCase()){wrongMessage.textContent='';startMusic();showScreen(screens.birthday);createConfetti();}else{wrongMessage.textContent=wrongMessages[wrongAttempts++%wrongMessages.length];passwordInput.classList.remove('shake');void passwordInput.offsetWidth;passwordInput.classList.add('shake');passwordInput.value='';passwordInput.focus();}});
document.getElementById('showPassword').addEventListener('click',()=>passwordInput.type=passwordInput.type==='password'?'text':'password');
document.getElementById('musicToggle').addEventListener('click',()=>{if(bgMusic.paused){bgMusic.play().then(()=>{document.getElementById('musicIcon').textContent='♫';document.getElementById('musicText').textContent='Music On';musicStarted=true;}).catch(()=>{});}else{bgMusic.pause();document.getElementById('musicIcon').textContent='🔇';document.getElementById('musicText').textContent='Muted';}});
document.getElementById('enterLoveWorld').addEventListener('click',()=>showScreen(screens.love));// ===============================
// CAKE CUTTING ANIMATION
// ===============================

const cutCakeBtn = document.getElementById('cutCakeBtn');
const cake = document.querySelector('.cake');
const cakeText = document.getElementById('cakeText');
const afterCake = document.getElementById('afterCake');

cutCakeBtn.addEventListener('click', () => {

    // Animate cake
    cake.classList.add('cut');

    // Change text
    cakeText.textContent = 'Cake cut! 🎂💗 Make your wish come true ✨';

    // Disable button
    cutCakeBtn.disabled = true;
    cutCakeBtn.textContent = '🎂 Cake Cut!';

    // Extra confetti
    createConfetti();

    // Show Love World button
    setTimeout(() => {
        afterCake.style.display = 'block';
    }, 1200);
});
const messages=[['Memory One','All our fights are temporary, but our friendship is forever. ❤️'],['Memory Two','Our friendship may not be perfect, but it’s one of the most precious things in my life💎.'],['Memory Three','No matter what happens, I’ll always choose our bond. 🫂'],['Memory Four','Your are my laughter in my dark days😘'],['Memory Five','No matter where life takes us, I hope we never become strangers, because your friendship will always have a special place in my heart 🫂❤️'],['Memory Six','Years may pass, people may change, but I hope this bond remains a beautiful part of our story🖇️']];
const grid=document.querySelector('.photo-grid');for(let i=1;i<=6;i++){const card=document.createElement('article');card.className='photo-card';card.tabIndex=0;card.innerHTML=`<div class="photo-inner"><div class="photo-front"><img src="assets/photo${i}.jpeg" alt="Memory ${i}"><span class="tap-label">TAP TO FLIP ↻</span></div><div class="photo-back"><div class="back-heart">♡</div><h3>${messages[i-1][0]}</h3><p>${messages[i-1][1]}</p><span class="music-note">♫ background music playing</span></div></div>`;grid.appendChild(card);const flip=()=>card.classList.toggle('flipped');card.addEventListener('click',flip);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip();}})}
document.getElementById('openLetterBtn').addEventListener('click',()=>showScreen(screens.letter));
const envelope=document.getElementById('envelope'),paper=document.getElementById('letterPaper'),openEnvelope=document.getElementById('openEnvelope'),typed=document.getElementById('typedLetter'),cursor=document.getElementById('cursor'),finalMessage=document.getElementById('finalMessage');
openEnvelope.addEventListener('click',()=>{envelope.querySelector('.envelope').classList.add('open');openEnvelope.disabled=true;openEnvelope.textContent='Opening... 💗';setTimeout(()=>{envelope.style.display='none';paper.style.display='block';typeLetter();},950)});
function typeLetter(){let i=0;typed.textContent='';const timer=setInterval(()=>{typed.textContent+=CONFIG.letter[i++];if(i>=CONFIG.letter.length){clearInterval(timer);cursor.style.display='none';setTimeout(()=>{finalMessage.style.display='block';finalMessage.style.animation='rise .9s both'},700)}},34)}
themeVideo.muted=true;
