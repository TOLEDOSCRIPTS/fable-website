javascript
const serverIP="play.fablesmp.net"

fetch("https://api.mcsrvstat.us/2/"+serverIP)
.then(res=>res.json())
.then(data=>{

if(data.online){

document.getElementById("status").innerHTML="Online"

document.getElementById("motd").innerHTML=data.motd.clean

document.getElementById("playerCount").innerHTML=
data.players.online+"/"+data.players.max

if(data.players.list){

let list=""

data.players.list.forEach(p=>{
list+=`<div>${p}</div>`
})

const el=document.getElementById("playerList")

if(el) el.innerHTML=list

}

}else{

document.getElementById("status").innerHTML="Offline"

}

})

