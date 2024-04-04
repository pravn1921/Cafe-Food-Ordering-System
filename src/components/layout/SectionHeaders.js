export default function SectionHeaders({subHeader,mainHeader}) {
  return (
    <>
      <h3 className="uppercase font-bold text-gray-500 leading-4 font-sans">
        {subHeader}
      </h3>
      <h2 className="text-primary font-extrabold text-4xl font-sans">
        {mainHeader}
      </h2>
    </>
  );
}