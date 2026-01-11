function playGame(playerChoice) {
    const emoji = ["✌️", "🖐️", "✊"];
    const computerChoice = emoji[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "平手！";
    } else if (
        (playerChoice === "✊" && computerChoice === "✌️") ||
        (playerChoice === "🖐️" && computerChoice === "✊") ||
        (playerChoice === "✌️" && computerChoice === "🖐️")
    ) {
        result = "你贏了！🎉";
    } else {
        result = "你輸了！😢";
    }

    document.getElementById('result').innerHTML = `
          你出：${playerChoice}<br>
          電腦出：${computerChoice}<br>
          <strong>${result}</strong>
        `;
}