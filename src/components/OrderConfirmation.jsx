import { useState } from "react";

const OrderConfirmation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <h2>Tack för ditt köp!</h2>
      <p>Din beställning har bekräftats.</p>

      <button onClick={openModal}>Visa orderdetaljer</button>

      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Orderdetaljer</h3>
            <p>Här är dina beställningsinformationer...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
