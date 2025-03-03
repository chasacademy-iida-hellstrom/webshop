const OrderConfirmation = ({ closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
     <div className="modal-content">
      <h2>Tack för ditt köp!</h2>
      <p>Din beställning har bekräftats.</p>
      <button onClick={closeModal}>Stäng</button>
     </div>
    </div>
  );
  };
  export default OrderConfirmation;  