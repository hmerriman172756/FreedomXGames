// connect.js

window.addEventListener('load', () => {
if (typeof EthereumProvider === "undefined") {
console.error("WalletConnect not loaded. Please refresh the page.");
}
});

async function connectWallet() {
if (typeof EthereumProvider === "undefined") {
alert("WalletConnect not loaded. Please refresh the page.");
return;
}

const provider = await EthereumProvider.init({
projectId: "6b6b3419257e1130f864ed7aa5dcc4b2", // WalletConnect Project ID
chains: [137], // Polygon chain ID
showQrModal: true,
rpcMap: {
137: "https://polygon-rpc.com"
},
methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData"]
});

try {
await provider.enable();

const web3 = new Web3(provider);
const accounts = await web3.eth.getAccounts();
const address = accounts[0];

document.getElementById("walletAddress").innerText = "Wallet: " + address;

provider.on("disconnect", () => {
document.getElementById("walletAddress").innerText = "";
});
} catch (error) {
console.error("WalletConnect error:", error);
alert("Connection failed. Please try again.");
}
}
