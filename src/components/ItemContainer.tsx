import ButtonMenu from "./ButtonMenu";
import Card from "./Card";

export default function ItemContainer() {
  return (
    <div className="bg-zinc-800 w-11/12 rounded-xl px-20 max-w-screen-xl absolute top-[25%] left-[16%] ">
      <h1 className="text-center text-white text-3xl font-bold pt-28">
        Our Collection
      </h1>
      <p className="text-sm w-5/12 text-zinc-500 font-bold mx-auto text-center py-6">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="flex justify-center gap-2 mb-8">
        <ButtonMenu name="All Products" />
        <ButtonMenu name="Available Now" />
      </div>
      <div className="pb-28">
        <Card />
      </div>
    </div>
  );
}
