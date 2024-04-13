'use client';
import {CartContext, cartProductPrice} from "@/components/AppContext";
import AddressInputs from "@/components/layout/AddressInputs";
import SectionHeaders from "@/components/layout/SectionHeaders";
import CartProduct from "@/components/menu/CartProduct";
import {useParams} from "next/navigation";
import {useContext, useEffect, useState} from "react";
import { MutatingDots } from "react-loader-spinner";

export default function OrderPage() {
  const {clearCart} = useContext(CartContext);
  const [order, setOrder] = useState();
  const [loadingOrder, setLoadingOrder] = useState(true);
  const {id} = useParams();
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

  useEffect(() => {
    if (typeof window.console !== "undefined") {
      if (window.location.href.includes('clear-cart=1')) {
        clearCart();
      }
    }
    if (id) {
      setLoadingOrder(true);
      fetch('/api/orders?_id='+id).then(res => {
        res.json().then(orderData => {
          setOrder(orderData);
          setLoadingOrder(false);
        });
      })
    }
  }, []);

  let subtotal = 0;
  if (order?.cartProducts) {
    for (const product of order?.cartProducts) {
      subtotal += cartProductPrice(product);
    }
  }

  const cancelOrder = () => {
    fetch(`/api/cancel-order/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId: id }),
    })
    .then(response => {
      if (response.ok) {
        // Order cancellation successful
        clearCart();
        window.location.href = '/';
      } else {
        // Handle error if order cancellation fails
        console.error('Failed to cancel order');
      }
    })
    .catch(error => {
      console.error('Error cancelling order:', error);
    });
  };
  
  const showCancelConfirmationModal = () => {
    setShowCancelConfirmation(true);
  };

  const hideCancelConfirmationModal = () => {
    setShowCancelConfirmation(false);
  };

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Your order" />
        <div className="mt-8 mb-8 font-sans font-bold text-gray-600 text-lg">
          <p>Thanks for ordering.</p>
          <p>Have a happy day with your <span className="text-primary text-lg">Favourite Meal...</span></p>
        </div>
      </div>
      {loadingOrder && (
        <div className="h-96 flex items-center justify-center">
        <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#0074B7"
        secondaryColor="#0074B7"
        radius="12"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
        </div>
      )}
      {order && (
        <div className="grid md:grid-cols-2 md:gap-16 bg-gray-100 p-3 border border-gray-200 rounded-xl">
          <div>
            {order.cartProducts.map(product => (
              <CartProduct key={product._id} product={product} />
            ))}
            <div className="item-start px-4 text-gray-500 w-44 border border-gray-300 mt-2 rounded-xl bg-gray-200">
              <div className="flex justify-between">
                <div>Subtotal:</div>
                <div><span className="text-gray-600 font-bold inline-block w-8">₹{subtotal}</span></div>
              </div>
              <div className="flex justify-between pb-1">
                Delivery:
                <span className="text-gray-500 font-bold inline-block w-8">₹30</span>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-1 text-primary font-bold">
                Total:
                <span className="text-primary font-bold inline-block w-8">
                ₹{subtotal + 30}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-200 p-4 rounded-lg border border-gray-300">
              <AddressInputs
                disabled={true}
                addressProps={order}
              />
            </div>
          </div>
          <div className="-mt-10">
            <button onClick={showCancelConfirmationModal} className="bg-red-500 text-white px-4 rounded-xl w-60">Cancel Order</button>
          </div>
        </div>
      )}
      {showCancelConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4 mx-auto">Cancel Order</h2>
            <p className="mb-4">Are you sure you want to cancel your order? This action cannot be undone.</p>
            <div className="flex justify-end">
              <button onClick={hideCancelConfirmationModal} className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md mr-2">Cancel</button>
              <button onClick={cancelOrder} className="bg-red-500 text-white px-4 py-2 rounded-md">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}