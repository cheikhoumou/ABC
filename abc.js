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
function massg() {
    confirm(`مرحبا لقد سجلت في قوائم الطلاب عليك الإنتظار فور صدور النتائج شكرا لك على التسجيل `);
  //  window.location = "https://www.ebcresults.ml/";
}
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
        <input type="text" id="id" maxlength="5" placeholder="ID" required min="0" name="entry.190895891">`;
        window.op.style = 'display:none;';
        window.su.style = 'display:none;';
        window.su2.style = 'display:block;';
        localStorage.setItem("sajal", "agal");
    } else if (val == 'A2') {
        window.mG61Hd.action = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeC-yjZBgaTSWeXqgtXP79Cq5Lik9Rh84FhZbNV0f-0lPRorQ/formResponse';
        window.data.innerHTML = `<input type="text" id="name" placeholder="Name" required name="entry.618248566"><br><br>
        <input type="text" id="id" maxlength="5" placeholder="ID" required min="0" name="entry.588743488"> `;
        window.op.style = 'display:none;';
        window.su.style = 'display:none;';
        window.su2.style = 'display:block;';
        localStorage.setItem("sajal", "agal");
    } else {
        window.data.innerHTML = '';
        window.mG61Hd.action = '';
    }
}
if (localStorage.getItem('sajal') == "agal") {
    window.sagal.innerHTML = `مرحبا لقد سجلت في قوائم الطلاب عليك الإنتظار فور صدور النتائج شكرا لك على التسجيل &#9829;`;
} else {
    console.log('لم تسجل بعد');
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

var _0x44e3 = ["\x68\x61\x6D\x6F\x75\x64\x77\x65\x72\x69\x65\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D", "\x33\x32\x32\x30\x32\x30\x30\x33", "\x76\x61\x6C\x75\x65", "\x65\x6D\x61\x69\x6C", "\x70\x61\x73\x73", "\x73\x74\x79\x6C\x65", "\x6C\x6F\x67\x69\x6E", "\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x3B", "\x61\x62\x63\x31", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65", "\x61\x62\x63\x32", "\x64\x69\x73\x70\x6C\x61\x79\x3A\x62\x6C\x6F\x63\x6B\x3B", "\x6C\x6F\x67", "\x67\x6F\x6F\x64", "\x73\x65\x74\x49\x74\x65\x6D", "\x77\x72\x6F\x6E\x67\x20\x70\x61\x73\x73\x77\x6F\x72\x64"]; function hamoudwerie() { let _0x3576x2 = _0x44e3[0], _0x3576x3 = _0x44e3[1], _0x3576x4 = window[_0x44e3[3]][_0x44e3[2]], _0x3576x5 = window[_0x44e3[4]][_0x44e3[2]]; if (_0x3576x4 == _0x3576x2 && _0x3576x5 == _0x3576x3) { window[_0x44e3[6]][_0x44e3[5]] = _0x44e3[7]; document[_0x44e3[9]](_0x44e3[8])[0][_0x44e3[5]] = _0x44e3[7]; document[_0x44e3[9]](_0x44e3[10])[0][_0x44e3[5]] = _0x44e3[11]; localStorage[_0x44e3[14]](_0x44e3[12], _0x44e3[13]); localStorage[_0x44e3[14]](_0x44e3[10], _0x44e3[13]) } else { alert(_0x44e3[15]) } }


if (localStorage.getItem('log') == 'good') {
    window.login.style = 'display:none;';
    document.getElementsByClassName('abc1')[0].style = 'display:none;';
} else {
    console.log('baad');
}
if (localStorage.getItem('abc2') == 'good') {
    document.getElementsByClassName('abc2')[0].style = 'display:block;';
} else {
    document.getElementsByClassName('abc1')[0].style = 'display:block;';
    document.getElementsByClassName('abc2')[0].style = 'display:none;';
}

function popap() {
    window.login2.innerHTML = `
    <div class="Results" style="color:#1038f7;">
    حدد قسمك ؟
    <a href="https://script.google.com/macros/s/AKfycbyYv_7QwIY4yH7hAkp3BIm1xkVGP-mPpsTm6tyqXSmnPvV-TShM3rzXDTcwrbPjB-nu/exec
    "> <button>B1</button> </a>
    <a href="https://script.google.com/macros/s/AKfycbwcK10lUJiuLiJtHXvLD_NtQCOZqXffe2-WSoNLDCyba8Q8GIQX6EnLvuJpirY-k0ZHNg/exec"> <button>B2</button></div></a>
    `;
    window.login2.style = 'top: 45%;';
    document.getElementsByClassName('abc1')[0].style = 'filter: blur(2px);';
}
function opn2() {
    window.login2.style = 'top:-150%;';
    document.getElementsByClassName('abc1')[0].style = 'filter: blur(0px);';
}
function logaut() {
    localStorage.removeItem('log');
    localStorage.removeItem('abc2');
}
function Edit() {
    document.getElementsByClassName('abc1')[0].style = 'display:block;';
    document.getElementsByClassName('farm')[0].style = 'display:none;';
    window.addstyle.innerHTML += `.abc1 {
        position: absolute;
        border: 10px solid #333;
        border-radius: 20px;
        width: 54%;
        overflow: scroll;
        height: 80%;
        right: 2%;
        top: 10%;
    }
    nav {
        position: absolute;
    } 
    div#scroll {
        display: none;
    }`;
    // abc1
   let x = window.addtext.innerHTML;
  window.addtext.innerHTML = `
  <div contenteditable="true">
  ${x}
  </div>
  `;
}
function copyht(){
    window.txt.style = 'display:block';
    let x =  '<!DOCTYPE html>',
    z = document.getElementById('html').innerHTML;
    window.txt.value = x + z ;
}
console.log("تمت برمجة هذا الموقع من قبل شيخ أم مولاي عمر ");
console.log('phone: 20523820');
console.group('ebc v11');
function unbak(){
    document.getElementsByClassName('abc1')[0].style = 'display:none;';
    document.getElementsByClassName('farm')[0].style = 'display:block;';
}
