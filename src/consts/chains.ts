import { ProtocolType } from '@hyperlane-xyz/utils';


import {
  eclipsemainnet,
  eclipsemainnetAddresses,
  ethereum,
  solanamainnet,
  solanamainnetAddresses,
} from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  solanamainnet: {
    ...solanamainnet,
    // SVM chains require mailbox addresses for the token adapters
    mailbox: solanamainnetAddresses.mailbox,
    // Including a convenient rpc override because the Solana public RPC does not allow browser requests from localhost
    rpcUrls: process.env.NEXT_PUBLIC_SOLANA_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_SOLANA_RPC_URL }]
      : solanamainnet.rpcUrls,
  },
  eclipsemainnet: {
    ...eclipsemainnet,
    mailbox: eclipsemainnetAddresses.mailbox,
  },
  coffeechain: {
    protocol: ProtocolType.Ethereum,
    chainId: 2910,
    domainId: 2910,
    name: 'coffeechain',
    displayName: 'Coffee Chain',
    nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: [{ http: 'http://13.54.168.253:8547' }],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
    logoURI: '/logos/coffeechain.png', // You'll need to add this logo
  },
  ethereum: {
    ...ethereum,
    rpcUrls: process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL
      ? [{ http: process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL }]
      : ethereum.rpcUrls,
  },
};
