import ChevronDown from "@/components/icons/ChevronDown";
import ChevronUp from "@/components/icons/ChevronUp";
import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import {useState} from "react";

export default function MenuItemPriceProps({name,addLabel,props,setProps}) {

  const [isOpen, setIsOpen] = useState(false);

  function addProp() {
    setProps(oldProps => {
      return [...oldProps, {name:'', price:0}];
    });
  }

  function editProp(ev, index, prop) {
    const newValue = ev.target.value;
    setProps(prevSizes => {
      const newSizes = [...prevSizes];
      newSizes[index][prop] = newValue;
      return newSizes;
    });
  }

  function removeProp(indexToRemove) {
    setProps(prev => prev.filter((v,index) => index !== indexToRemove));
  }

  return (
    <div className="bg-gray-200 p-2 rounded-md mb-2">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="inline-flex p-1 border-0 justify-start"
        type="button">
        {isOpen && (
          <ChevronUp />
        )}
        {!isOpen && (
          <ChevronDown />
        )}
        <span className="text-gray-500">{name}</span>
      </button>
      <div className={isOpen ? 'block' : 'hidden'}>
        {props?.length > 0 && props.map((size,index) => (
          <div key={index} className="flex items-end gap-2">
            <div>
              <label className="py-2 inline-flex items-center gap-2 font-semibold">Name</label>
              <input type="text"
                     placeholder="Size name"
                     value={size.name}
                     onChange={ev => editProp(ev, index, 'name')}
              />
            </div>
            <div>
              <label className="py-2 inline-flex items-center gap-2 font-semibold">Extra</label>
              <input type="text" placeholder="Extra price"
                     value={size.price}
                     onChange={ev => editProp(ev, index, 'price')}
              />
            </div>
            <div>
              <button type="button"
                      onClick={() => removeProp(index)}
                      className="bg-white mb-2 px-2 hover:bg-primary hover:text-white">
                <Trash />
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addProp}
          className="items-center w-44 mx-auto rounded-full bg-primary text-white mt-2">
          <span>{addLabel}</span>
        </button>
      </div>
    </div>
  );
}