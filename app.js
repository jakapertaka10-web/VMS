var S={door:0,shoes:0,uv:0,fan:0,drawer:0,sit:0},cur=0;
var steps=[
{t:'Buka pintu sliding acrylic ke samping',s:{door:1,shoes:0,uv:0,fan:0,drawer:0,sit:0}},
{t:'Letakkan sepatu di rak penyimpanan',s:{door:1,shoes:1}},
{t:'Tutup pintu, nyalakan kipas mini dan lampu UV dengan remote',s:{door:0,uv:1,fan:1}},
{t:'Simpan kaos kaki, kunci, dan perlengkapan lain di laci',s:{drawer:1}},
{t:'Duduk nyaman di bantalan ergonomis saat memakai atau melepas sepatu',s:{drawer:0,sit:1}},
{t:'Matikan UV dan kipas setelah selesai',s:{uv:0,fan:0,sit:0}}];
var caps=['Pintu terbuka','Sepatu masuk rak','UV dan kipas menyala','Laci terbuka','Bantalan dipakai duduk','Semua dimatikan'];
function $(i){return document.getElementById(i)}
function render(){
  $('door').style.transform=S.door?'translateX(-130px)':'translateX(0)';
  $('drawer').style.transform=S.drawer?'translateY(0) translateX(-0px)':'none';
  $('drawer').style.transform=S.drawer?'translateX(0) scale(1.06,1.06)':'none';
  $('drawer').style.transformOrigin='122px 108px';
  $('cush').style.transform=S.sit?'translateY(4px) scaleY(.9)':'none';
  $('cush').style.transformOrigin='220px 76px';
  $('shoes').style.opacity=S.shoes?1:0;
  $('uvg').style.opacity=S.uv?1:0;
  $('uvl').style.opacity=S.uv?1:.35;
  $('air').style.opacity=S.fan?.8:0;
  $('fan').classList.toggle('spin',!!S.fan);
  var b=document.querySelectorAll('#tg button');
  for(var i=0;i<b.length;i++){var k=b[i].dataset.k;b[i].setAttribute('aria-pressed',S[k]?'true':'false')}
  var st=document.querySelectorAll('#steps button');
  for(i=0;i<st.length;i++){if(i===cur)st[i].setAttribute('aria-current','step');else st[i].removeAttribute('aria-current')}
  $('cap').textContent=caps[cur]||'';
}
function go(n){
  cur=(n+steps.length)%steps.length;
  var s=steps[cur].s;for(var k in s)S[k]=s[k];
  if(cur===0)S.shoes=0;
  render();
}
var ol=$('steps');
steps.forEach(function(s,i){
  var li=document.createElement('li'),bt=document.createElement('button');
  bt.innerHTML='<b>'+(i+1)+'</b><span>'+s.t+'</span>';
  bt.onclick=function(){
    S={door:0,shoes:0,uv:0,fan:0,drawer:0,sit:0};
    for(var j=0;j<=i;j++){var x=steps[j].s;for(var k in x)S[k]=x[k]}
    cur=i;render();
  };
  li.appendChild(bt);ol.appendChild(li);
});
$('next').onclick=function(){go(cur+1)};
$('prev').onclick=function(){go(cur-1)};
$('tg').onclick=function(e){var k=e.target.dataset&&e.target.dataset.k;if(!k)return;S[k]=S[k]?0:1;if(k==='door'&&S.door&&!S.shoes)S.shoes=1;render()};
var specs=[
['🪵','Material','Kayu pinus, acrylic, dan kain. Ringan, kuat, dan hangat dilihat.'],
['🚪','Sliding door acrylic','Pintu geser transparan. Isi rak terlihat tanpa perlu membuka, dan hemat ruang saat dibuka.'],
['💜','Lampu UV','Membantu sterilisasi sepatu agar lebih higienis. Dinyalakan lewat remote.'],
['🌀','Kipas','Mengalirkan udara untuk mengeringkan sepatu dan mengurangi lembap.'],
['🧽','Filter debu','Menyaring debu agar bagian dalam rak tetap bersih.'],
['🗄️','Laci penyimpanan','Tempat kaos kaki, kunci, dan perlengkapan kecil lainnya.'],
['🛋️','Bantalan ergonomis','Dudukan empuk untuk memakai atau melepas sepatu dengan nyaman.']];
var sg=$('specs');
specs.forEach(function(s){
  var b=document.createElement('button');b.className='spec';b.setAttribute('aria-expanded','false');
  b.innerHTML='<div class="ic">'+s[0]+'</div><h3>'+s[1]+'</h3><p>'+s[2]+'</p>';
  b.onclick=function(){b.setAttribute('aria-expanded',b.getAttribute('aria-expanded')==='true'?'false':'true')};
  sg.appendChild(b);
});
var imgs=['assets/foto-1.jpg','assets/foto-2.jpg'],alts=['NUVION tampak serong','NUVION tampak samping'];
document.querySelectorAll('.thumbs button').forEach(function(b){
  b.onclick=function(){var i=+b.dataset.i;$('big').src=imgs[i];$('big').alt=alts[i];
    document.querySelectorAll('.thumbs button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')})}
});
go(0);
