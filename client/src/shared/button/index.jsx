import Link from 'next/link';
import * as React from 'react';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import {ABI} from "/Users/user/xx/Eagle_Eye/client/src/utils/customerContractABI.js"

 
export function LinkButton({ content, href }) {
  return (
    <Link href={`${href}`} passHref>
      <a
        className={`
                inline-block transition-all duration-700 ease-in-out mt-4 mb-8 py-4 px-10 text-xl
                leading-8 text-white font-heading font-medium tracking-tighter text-center bg-west rounded
            `}
        href="#"
      >
        {content}
      </a>
    </Link>
  );
}

export function AnchorButton({ className, content, href }) {
  
  return (
    <a
      className={`
                inline-block transition-all duration-700 ease-in-out
                py-1 text-sm text-white text-center rounded w-[100%]
                ${className}
            `}
      href={`${href}`}
    >
      {content}
    </a>
  );
}

export function Button({ className, content, onClick }) {
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div>
        <img src={ensAvatar} alt="ENS Avatar" />
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector.name}</div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          className={`
        inline-block transition-all duration-700 ease-in-out px-4 py-2 text-sm
        md:text-base md:px-8 md:py-2 text-white font-heading 
        font-medium tracking-tighter text-center rounded
        ${className}
      `}
        >
          connect
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}
      {error && <div>{error.message}</div>}
    </div>
  );
}
