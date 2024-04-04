'use client';
import AddressInputs from "@/components/layout/AddressInputs";
import EditableImage from "@/components/layout/EditableImage";
import { useProfile } from "@/components/UseProfile";
import { useState } from "react";

export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || '');
  const [image, setImage] = useState(user?.image || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '');
  const [postalCode, setPostalCode] = useState(user?.postalCode || '');
  const [city, setCity] = useState(user?.city || '');
  const [country, setCountry] = useState(user?.country || '');
  const [admin, setAdmin] = useState(user?.admin || false);
  const { data: loggedInUserData } = useProfile();
  const [errors, setErrors] = useState({});

  function handleAddressChange(propName, value) {
    if (propName === 'phone') setPhone(value);
    if (propName === 'streetAddress') setStreetAddress(value);
    if (propName === 'postalCode') setPostalCode(value);
    if (propName === 'city') setCity(value);
    if (propName === 'country') setCountry(value);
  }

  function validateForm() {
    const errors = {};

    if (!userName.trim()) {
      errors.userName = 'Name is required.';
    }

    if (!phone.trim() || !/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number is required and must be 10 digits';
    }

    if (!postalCode.trim() || !/^\d{6}$/.test(postalCode)) {
      errors.postalCode = 'Postal code is required and must be 6 digits';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      onSave(event, {
        name: userName, image, phone, admin,
        streetAddress, city, country, postalCode,
      });
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="p-2 rounded-3xl w-40 h-56 border-2 bg-gray-200 border-gray-300">
        <EditableImage link={image} setLink={setImage} />
      </div>
      <form className="w-[400px]" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <label>Email</label>
        <input type="email" disabled={true} value={user.email} placeholder={'Email'} />
        <AddressInputs
          addressProps={{ phone, streetAddress, postalCode, city, country }}
          setAddressProp={handleAddressChange}
        />
        {loggedInUserData.admin && (
          <div>
            <label className="py-2 inline-flex items-center gap-2 font-semibold" htmlFor="adminCb">
              <input
                id="adminCb"
                type="checkbox"
                className=""
                value={'1'}
                checked={admin}
                onChange={(ev) => setAdmin(ev.target.checked)}
              />
              <span>Admin</span>
            </label>
          </div>
        )}
        {errors.userName && <span className="text-red-500 font-sans list-item ml-5">{errors.userName}</span>}
        {errors.phone && <span className="text-red-500 font-sans list-item ml-5">{errors.phone}</span>}
        {errors.postalCode && <span className="text-red-500 font-sans list-item ml-5">{errors.postalCode}</span>}
        <button type="submit" className="mt-3 rounded-full w-36">
          Save
        </button>
      </form>
    </div>
  );
}
