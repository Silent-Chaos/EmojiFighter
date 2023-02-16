let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
let RemojiOne=Math.floor(Math.random()*fighters.length)
let RemojiTwo=Math.floor(Math.random()*fighters.length)

 stageEl.textContent=fighters[RemojiOne]+" vs "+fighters[RemojiTwo]

})
