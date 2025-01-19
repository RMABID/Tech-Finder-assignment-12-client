import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "../Form/CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const PaymentModal = ({ refetch }) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-center text-lg">Welcome</h3>
          <p className="py-4 text-center">Membership Subscribe Amount</p>
          <p className="text-center">Pay Amount : 50</p>
          <Elements stripe={stripePromise}>
            <CheckoutFrom refetch={refetch} />
          </Elements>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PaymentModal;
