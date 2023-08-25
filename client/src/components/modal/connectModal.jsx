import { Section, Div, Logo, LogoType } from '../../shared';

function ConnectWalletModal({ handleOpenModal, openModal }) {
  return (
    <Section
      className={`fixed z-50 top-0 left-0 w-[100%] h-screen bg-black bg-opacity-20 
        flex justify-center items-center transition-all duration-500 ${
          openModal
            ? 'translate-y-0 opacity-100 visible'
            : 'translate-y-12 opacity-0 invisible'
        } transition-all duration-500`}
    >
      <div
        className={`mx-auto w-[90%] max-w-[500px] ${
          openModal ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
        } transition-all duration-500 delay-300`}
      >
        <div className="flex justify-center items-center mb-4">
          <i
            onClick={() => handleOpenModal()}
            className="cursor-pointer text-center text-3xl ri-close-circle-line"
          ></i>
        </div>
        <div className="h-[400px] bg-white rounded">
          <div className="px-4 py-2 border-b border-gray flex flex-col justify-center items-center">
            <Logo />
            <p className="text-dgray font-light text-sm">
              Select one of the following to continue
            </p>
          </div>

          <div className="flex justify-between items-center py-4 w-[100%] max-w-[150px] mx-auto">
            <i className="text-2xl text-primary-manRed ri-google-fill"></i>
            <i className="text-2xl text-resblue ri-facebook-fill"></i>
            <i className="text-2xl text-primary-azure ri-twitter-fill"></i>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ConnectWalletModal;
