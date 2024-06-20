interface btnName {
  name: string;
}

export default function ButtonMenu({ name }: btnName) {
  return (
    <button className="p-2 text-sm rounded-lg min-w-30 hover:bg-gray-500 text-bold text-white">
      {name}
    </button>
  );
}
