let provider;

async function connectWithWalletConnect() {
  provider = new WalletConnectProvider.default({
    rpc: {
      137: "https://polygon-rpc.com"
    },
    chainId: 137
  });

  provider.on("connect", (info) => {
    console.log("WalletConnect connected:", info);
  });

  provider.on("accountsChanged", (accounts) => {
    console.log("Accounts changed:", accounts);
    displayAddress(accounts[0]);
  });

  provider.on("disconnect", (code, reason) => {
    console.log("WalletConnect disconnected", code, reason);
    document.getElementById("walletAddress").innerText = "";
  });

  try {
    await provider.enable();

    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();

    if (accounts && accounts.length > 0) {
      displayAddress(accounts[0]);
    } else {
      alert("No accounts returned.");
    }
  } catch (err) {
    console.error("WalletConnect error:", err);
    alert("Connection failed.");
  }
}

function displayAddress(address) {
  document.getElementById("walletAddress").innerText = `Wallet: ${address}`;
}
