import PropTypes from "prop-types";

const OrderConfirmation = ({ closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been confirmed.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

OrderConfirmation.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default OrderConfirmation;
