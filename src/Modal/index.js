import PropTypes from "prop-types";
import * as React from "react";

export function Modal({
  isOpen = false,
  onClose,
  children,
  showCloseIcon = false,
  backgroundOnClose = false,
}) {
  return isOpen ? (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          margin: "0 auto",
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={backgroundOnClose ? onClose : null}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: 0,
          left: 0,
          margin: "0 auto",
          width: "50vw",
          padding: 20,
          background: "white",
        }}
      >
        {showCloseIcon ? (
          <button
            style={{
              all: "unset",
              position: "absolute",
              top: 5,
              right: 5,
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            X
          </button>
        ) : null}
        {children}
      </div>
    </>
  ) : null;
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  showCloseIcon: PropTypes.bool.isRequired,
  backgroundOnClose: PropTypes.bool.isRequired,
};

export default function Page() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleToggleModal}>Open Modal</button>
      {/* <Modal isOpen={isModalOpen} onClose={handleToggleModal} headerText="Welcome to my modal" /> */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleToggleModal}
        showCloseIcon
        backgroundOnClose
      >
        <header>Welcome to my modal</header>
        <div>content</div>
        <footer>footer</footer>
        <button
          onClick={() => {
            // ... do api call
            // onsuccess
            handleToggleModal();
          }}
        >
          click me
        </button>
      </Modal>
    </>
  );
}
