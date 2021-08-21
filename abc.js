function opn() {
    window.login.style = 'left: 12%;';
    document.getElementsByClassName('abc1')[0].style = 'filter: blur(2px);';
}
function opn1() {
    window.login.style = 'left:150%;';
    document.getElementsByClassName('abc1')[0].style = 'filter: blur(0px);';
}
window.data.innerHTML = '';
window.mG61Hd.action = '';
/*
abc 1
https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIBbb5lRM7CAwRPN1eBSAsL-XKssczJHJzZGi__dBGrABWqQ/formResponse

abc 2
action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeC-yjZBgaTSWeXqgtXP79Cq5Lik9Rh84FhZbNV0f-0lPRorQ/formResponse"

////////////////////////////////

abc 1
            <input type="text" id="name" placeholder="Name" required name="entry.869609672"><br><br>
            <input type="number" id="id" maxlength="50" placeholder="ID" required min="0" name="entry.190895891">
abc 2
            <input type="text" id="name" placeholder="Name" required name="entry.618248566"><br><br>
            <input type="number" id="id" maxlength="50" placeholder="ID" required min="0" name="entry.588743488">           
*/
function sab() {
    let val = window.op.value;
    if (val == 'A1') {
        window.mG61Hd.action = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIBbb5lRM7CAwRPN1eBSAsL-XKssczJHJzZGi__dBGrABWqQ/formResponse';
        window.data.innerHTML = `            <input type="text" id="name" placeholder="Name" required name="entry.869609672"><br><br>
        <input type="number" id="id" maxlength="50" placeholder="ID" required min="0" name="entry.190895891">`;
        window.op.style = 'display:none;';
        window.su.style = 'display:none;';
        window.su2.style = 'display:block;';
    } else if (val == 'A2') {
        window.mG61Hd.action = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeC-yjZBgaTSWeXqgtXP79Cq5Lik9Rh84FhZbNV0f-0lPRorQ/formResponse';
        window.data.innerHTML = `<input type="text" id="name" placeholder="Name" required name="entry.618248566"><br><br>
        <input type="number" id="id" maxlength="50" placeholder="ID" required min="0" name="entry.588743488"> `;
        window.op.style = 'display:none;';
        window.su.style = 'display:none;';
        window.su2.style = 'display:block;';
    } else {
        window.data.innerHTML = '';
        window.mG61Hd.action = '';
    }
}
function loginadmin() {
    window.mG61Hd.innerHTML = `
    <img src="https://e.top4top.io/p_2059ep8e21.png" width="50">
            <h3>login</h3><br>
    <input type="email" id="email" placeholder="Email" required><br><br>
    <input type="password" id="pass" maxlength="8" placeholder="password" required><br><br>
    <input type="submit" value="login" id="su3"onclick="hamoudwerie();"> `;
    window.mG61Hd.action = '#';

}
//hamoudwerie@gmail.com
// 32202003
function hamoudwerie() {
    let mail = 'hamoudwerie@gmail.com',
        passw = '32202003',
        idm = window.email.value,
        idp = window.pass.value;
    if (idm == mail && idp == passw) {
        window.login.style = 'display:none;';
        document.getElementsByClassName('abc1')[0].style = 'display:none;';
        document.getElementsByClassName('abc2')[0].style = 'display:block;';
        localStorage.setItem('log', 'good');
        localStorage.setItem('abc2', 'good');
    } else {
        alert('wrong password');
    }
}
if(localStorage.getItem('log') == 'good'){
    window.login.style = 'display:none;';
    document.getElementsByClassName('abc1')[0].style = 'display:none;';
}else{
    console.log('baad');
}
if(localStorage.getItem('abc2') == 'good'){
    document.getElementsByClassName('abc2')[0].style = 'display:block;';
}else{
    document.getElementsByClassName('abc1')[0].style = 'display:block;';
    document.getElementsByClassName('abc2')[0].style = 'display:none;';
}
function popap(){
    window.login2.innerHTML = `
    
    <div class="Results">
    <a href="https://script.google.com/macros/s/AKfycbyYv_7QwIY4yH7hAkp3BIm1xkVGP-mPpsTm6tyqXSmnPvV-TShM3rzXDTcwrbPjB-nu/exec
    "> <button>A1</button> </a>
    <a href="https://script.google.com/macros/s/AKfycbwcK10lUJiuLiJtHXvLD_NtQCOZqXffe2-WSoNLDCyba8Q8GIQX6EnLvuJpirY-k0ZHNg/exec"> <button>A2</button></div></a>
    `;
    window.login2.style = 'top: 45%;';
    document.getElementsByClassName('abc1')[0].style = 'filter: blur(2px);';
}
function opn2() {
    window.login2.style = 'top:-150%;';
    document.getElementsByClassName('abc1')[0].style = 'filter: blur(0px);';
}
function logaut(){
   localStorage.removeItem('log');
   localStorage.removeItem('abc2');
}
