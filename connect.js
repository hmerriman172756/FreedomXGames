// connect.js

import WalletConnectProvider from "@walletconnect/web3-provider";

window.addEventListener("load", async () => {
const provider = new WalletConnectProvider({
rpc: {
137: "https://polygon-rpc.com",
},
chainId: 137,
showQrModal: true,
});

try {
await provider.enable();

const web3 = new Web3(provider);
const accounts = await web3.eth.getAccounts();
const address = accounts[0];

document.getElementById("walletAddress").innerText = "Wallet: " + address;
} catch (err) {
console.error("Connection failed", err);
}
});
