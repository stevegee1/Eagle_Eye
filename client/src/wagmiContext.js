import React, { FC } from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const WagmiProvider = ({ children }) => {
  // Configure chains & providers with the Alchemy provider.
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey: 'Qc2NT-Ir0meOHMlfGQM3mQ3gSfDn7HbR' })],
  );

  // Set up wagmi config
  const config = createConfig({
    autoConnect: true,
    connectors: [new MetaMaskConnector({ chains })],
    publicClient,
    webSocketPublicClient,
  });

  // You can now use the 'config' object to provide it down the component tree
  // and access it wherever needed.

  return <>{children}</>;
};

export default WagmiProvider;
