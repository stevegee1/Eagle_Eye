import { useState } from 'react';
import Head from 'next/head';
import { ConnectWalletModal, Navbar, Sidebar } from '../components';

function Layout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function handleOpenSidebar() {
    setOpenSidebar(!openSidebar);
  }

  function handleOpenModal() {
    setOpenModal(!openModal);
  }

  return (
    <div>
      <Head>
        <title>Eagle eye</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="" />
        <meta name="description" content="Eagle eye" />
      </Head>

      <main className="relative">
        <Navbar
          handleOpenSidebar={handleOpenSidebar}
          handleOpenModal={handleOpenModal}
        />
        <div className="relative flex">
          <Sidebar openSidebar={openSidebar} />
          {children}
        </div>
        <ConnectWalletModal
          className={`z-50`}
          handleOpenModal={handleOpenModal}
          openModal={openModal}
        />
      </main>
    </div>
  );
}

export default Layout;
