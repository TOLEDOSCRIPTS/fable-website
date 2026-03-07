
const server="play.fablesmp.net"

fetch("https://api.mcsrvstat.us/2/"+server)
.then(r=>r.json())
.then(data=>{

if(data.online){

document.getElementById("status").innerText="🟢 Server Online"

document.getElementById("motd").innerText=data.motd.clean

document.getElementById("players").innerText=
data.players.online+" / "+data.players.max+" players"

if(data.players.list){

let html=""

data.players.list.forEach(p=>{
html+=`<div class="player">${p}</div>`
})

document.getElementById("playerList").innerHTML=html

}

}else{

document.getElementById("status").innerText="🔴 Server Offline"

}

})

function copyIP(){
navigator.clipboard.writeText(server)
alert("Server IP copied")
}

