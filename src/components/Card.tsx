import Image from "next/image";
import orderList from "../json/orderList.json";

// interface cardCoffee {
//   type?: string;
//   price?: number;
//   sold?: boolean;
// }

// {type, price}:cardCoffee

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center gap-9 mx-3">
      {orderList.map((coffee, id) => (
        <div key={id} className="cursor-pointer">
          <Image
            src={`/assets/imgs/coffees/${coffee.id}.jpg`}
            className="rounded-xl mb-4 shadow-xl"
            alt=""
            width={250}
            height={64}
          />

          <div className="flex justify-between ">
            <h1 className="text-white">{coffee.type}</h1>
            <h2 className="text-xs bg-green-200 text-black font-bold rounded-md p-1">
              ${coffee.price.toFixed(2)}
            </h2>
          </div>
          <div className="flex justify-between">
            <ul className="flex gap-1 items-end">
              <li>
                <img src="/assets/svgs/star_fill.svg" alt="" />
              </li>
              <li className="text-sm text-white">4.7</li>
              <li className="text-zinc-500 text-xs font-bold">(35 votes)</li>
            </ul>
            <div>
              <span className="text-xs text-orange-500 font-bold">
                {coffee.sold ? "sold out" : ""}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
