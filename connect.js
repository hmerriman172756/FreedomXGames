// connect.js

async function connectWithWalletConnect() {
  const provider = new WalletConnectProvider.default({
    rpc: {
      137: "https://polygon-rpc.com" // Polygon Mainnet
    },
    chainId: 137
  });

  try {
    // Enable session (triggers QR Code modal)
    await provider.enable();

    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const walletAddress = accounts[0];

    // Display connected address
    const walletElement = document.getElementById("walletAddress");
    if (walletElement) {
      walletElement.innerText = "Wallet: " + walletAddress;
    }

    // Handle disconnect
    provider.on("disconnect", (code, reason) => {
      console.log("Disconnected:", code, reason);
      if (walletElement) {
        walletElement.innerText = "Wallet disconnected.";
      }
    });

  } catch (err) {
    console.error("WalletConnect error:", err);
    alert("Failed to connect wallet.");
  }
}
