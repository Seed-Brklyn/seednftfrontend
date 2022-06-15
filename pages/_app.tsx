import '../styles/global.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  wallet,
} from '@rainbow-me/rainbowkit';
import { chain, createClient, configureChains, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Head from 'next/head';

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.rinkeby,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.rinkeby]
      : []),
  ],
  [
    alchemyProvider({ alchemyId: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC' }),
    publicProvider(),
  ]
);

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit Mint NFT Demo',
  chains,
});

const demoAppInfo = {
  appName: 'RainbowKit Mint NFT Demo',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [wallet.argent({ chains }), wallet.trust({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Seed NFT Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Codystardisplay=swap"
          rel="stylesheet"
        />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
