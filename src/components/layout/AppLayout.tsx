import { MultiProtocolWalletModal } from '@hyperlane-xyz/widgets';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { APP_NAME, BACKGROUND_COLOR, BACKGROUND_IMAGE } from '../../consts/app';
import { config } from '../../consts/config';
import { useStore } from '../../features/store';
import { SideBarMenu } from '../../features/wallet/SideBarMenu';
export function AppLayout({ children }: PropsWithChildren) {
  const router = useRouter(); // Get current route
  const { showEnvSelectModal, setShowEnvSelectModal, isSideBarOpen, setIsSideBarOpen } = useStore(
    (s) => ({
      showEnvSelectModal: s.showEnvSelectModal,
      setShowEnvSelectModal: s.setShowEnvSelectModal,
      isSideBarOpen: s.isSideBarOpen,
      setIsSideBarOpen: s.setIsSideBarOpen,
    }),
  );

  // Define different background styles for specific pages
  const isCafePage = router.pathname === '/cafe'; // Check if it's the cafe page

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      {/* Apply background conditionally */}
      <div
        style={
          isCafePage
            ? {} // No background styling for cafe page
            : {
                backgroundColor: BACKGROUND_COLOR,
                backgroundImage: BACKGROUND_IMAGE,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }
        }
        id="app-content"
        className="min-w-screen relative flex h-full min-h-screen w-full flex-col justify-between overflow-y-hidden"
      >
          <main className="flex w-full flex-1 items-center justify-center overflow-hidden">{children}</main>
        </div>
        <MultiProtocolWalletModal
        isOpen={showEnvSelectModal}
        close={() => setShowEnvSelectModal(false)}
        protocols={config.walletProtocols}
      />
      <SideBarMenu
        onClose={() => setIsSideBarOpen(false)}
        isOpen={isSideBarOpen}
        onClickConnectWallet={() => setShowEnvSelectModal(true)}
      />

    </>
  );
}
