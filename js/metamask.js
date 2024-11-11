// 检查网络
async function addArbIfNotExist() {
    const {ethereum} = window;
    // 判断链对不，链不对就请求切换网络，或者添加网络，
    if (ethereum) {
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    chainId: Web3.utils.numberToHex(421614)
        }]
        })
            MetaMaskInstalled = true;
            MetaMaskConnected = true;
        } catch (err) {
            if (err.code === 4902) {
                try {
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: Web3.utils.numberToHex(421614),
                    chainName: 'Arbitrum Sepolia',
                        nativeCurrency: {
                        name: 'ETH',
                            symbol: 'ETH',
                            decimals: 18
                    },
                    rpcUrls: ['https://sepolia-rollup.arbitrum.io/rpc'], // 节点
                        blockExplorerUrls: ['https://sepolia.arbiscan.io/']
                }
                ]
                })
                } catch (ee) {
                    console.log('Add chain failed.');
                }
            } else if (err.code === 4001) {
                layer.msg("Please connect to MetaMask.")
            }
        }
    }
}