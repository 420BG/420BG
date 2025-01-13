let hashCount = 0;

function startMining() {
  const hashDisplay = document.getElementById('hashCount');
  setInterval(() => {
    hashCount += Math.floor(Math.random() * 10);
    hashDisplay.textContent = hashCount;
  }, 100);
}
