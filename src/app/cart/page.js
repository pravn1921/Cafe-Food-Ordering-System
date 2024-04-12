'use client';
import { CartContext, cartProductPrice } from "@/components/AppContext";
import AddressInputs from "@/components/layout/AddressInputs";
import SectionHeaders from "@/components/layout/SectionHeaders";
import CartProduct from "@/components/menu/CartProduct";
import { useProfile } from "@/components/UseProfile";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MutatingDots } from "react-loader-spinner";

export default function CartPage() {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  const [address, setAddress] = useState({});
  const { loading, data: profileData } = useProfile();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.href.includes('canceled=1')) {
        toast.error('Payment failed');
      }
    }
  }, []);

  useEffect(() => {
    if (profileData?.city) {
      const { phone, streetAddress, city, postalCode, country } = profileData;
      const addressFromProfile = {
        phone,
        streetAddress,
        city,
        postalCode,
        country
      };
      setAddress(addressFromProfile);
    }
  }, [profileData]);

  let subtotal = 0;
  for (const p of cartProducts) {
    subtotal += cartProductPrice(p);
  }
  function handleAddressChange(propName, value) {
    setAddress(prevAddress => ({ ...prevAddress, [propName]: value }));
  }
  async function proceedToCheckout(ev) {
    ev.preventDefault();
    // address and shopping cart products

    const promise = new Promise((resolve, reject) => {
      fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address,
          cartProducts,
        }),
      }).then(async (response) => {
        if (response.ok) {
          resolve();
          window.location = await response.json();
        } else {
          reject();
        }
      });
    });

    if(loading){
      return <div className="h-96 flex items-center justify-center ">
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
      </div>;
    }

    await toast.promise(promise, {
      loading: 'Preparing your order...',
      success: 'Redirecting to payment...',
      error: 'Something went wrong... Please try again later',
    })
  }

  if (cartProducts?.length === 0) {
    return (
      <section className="mt-8 text-center">
        <SectionHeaders mainHeader="Cart" />
        <p className="mt-4">Your shopping cart is empty..</p>
      </section>
    );
  }

  return (
    <section className="mx-24 mt-8">
      <div className="text-center font-sans font-extrabold text-5xl text-primary">
        Cart
      </div>

        <div className="mt-10 grid gap-8 grid-cols-2 mr-2">
          <div className="p-5 rounded-xl border-2  bg-gray-100">
            {cartProducts?.length === 0 && (
              <div>No products in your shopping cart</div>
            )}
            {cartProducts?.length > 0 && cartProducts.map((product, index) => (
              <CartProduct
                key={index}
                product={product}
                onRemove={removeCartProduct}
              />
            ))}
            <div className="px-4 py-2 flex justify-between mt-3 font-nunito rounded-xl bg-gray-200 border-2 border-gray-300 w-60">
              <div className="text-gray-500 font-sans">
                Subtotal:<br />
                Delivery Charges:<br />
                <div className="border-t border-gray-300 mt-2">
                  Total:
                </div>
              </div>
              <div className="font-semibold text-right">
                ₹{subtotal}<br />
                ₹30<br />
                <div className="border-t border-gray-300 mt-2">
                  ₹{subtotal + 30}
                </div>
              </div>
            </div>
          </div>
        <div className="bg-gray-100 p-4 rounded-xl border-2 border-gray-150 ml-2">
          <h2 className="mb-2 font-extrabold text-xl text-gray-600">Checkout</h2>
          <form onSubmit={proceedToCheckout}>
            <AddressInputs
              addressProps={address}
              setAddressProp={handleAddressChange}
            />
            <div className="flex justify-center">
              <button type="submit" className="w-44 rounded-full mt-4">Pay&nbsp; ₹{subtotal + 30}</button>
            </div>
          </form>
        </div>
        </div>
    </section>
  );
}
