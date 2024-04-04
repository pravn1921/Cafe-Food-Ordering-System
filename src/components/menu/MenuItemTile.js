import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({onAddToCart, ...item}) {
  const {image, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="bg-gray-200 p-4 text-center rounded-2xl
    group hover:bg-blue-100 hover:shadow-lg hover:shadow-black/25
    transition-all mx-8">
      <div className="text-center">
        <img src={image} className="max-h-36 block mx-auto" alt="pizza"/>
      </div>
      <h4 className="text-3xl my-3 mt-4 font-sans font-extrabold text-primary">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3 w-72 mx-auto font-nunito">
        {description}
      </p>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}