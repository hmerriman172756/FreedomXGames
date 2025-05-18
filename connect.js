// connect.js

async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const walletAddress = accounts[0];
      document.getElementById("walletAddress").innerText = "Wallet: " + walletAddress;
    } catch (err) {
      console.error("User rejected connection:", err);
    }
  } else {
    alert("No Ethereum wallet found. Please install MetaMask or use WalletConnect.");
  }
}
