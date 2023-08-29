// Import necessary libraries
import React from 'react';
import WagmiProvider from '../wagmiContext'; // Assuming the path to WagmiProvider.js
import '../styles/globals.css';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import {arbitrumGoerli, avalancheFuji} from "wagmi/chains"
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc';


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [arbitrumGoerli,mainnet],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: "https://goerli-rollup.arbitrum.io/rpc",
      }),
    }),
  ],
  [alchemyProvider({ apiKey: 'Qc2NT-Ir0meOHMlfGQM3mQ3gSfDn7HbR' })],
);
const config = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});
// Define your MyApp component
function MyApp({ Component, pageProps }) {
  
  
    
    // Set up wagmi config
    

    // You can now use the 'config' object to provide it down the component tree
    // and access it wherever needed.

  //  return <>{children}</>;
  
  return (
    <WagmiConfig config={config}>
      {/* Render the Component along with its pageProps */}
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;
