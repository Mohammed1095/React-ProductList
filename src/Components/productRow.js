import React from "react";

const products = [
  {
    id: 1,
    name: "Mercedes _ 1",
    href: "#",
    imageSrc: require("../Assets/Merceds_1.jpg"),
    imageAlt: "Brand new mecredes.",
    price: "$150,000.00",
    color: "Silver",
  },
  {
    id: 2,
    name: "Mercedes _ 2",
    href: "#",
    imageSrc: require("../Assets/Merceds_2.jpg"),
    imageAlt: "Brand new mecredes.",
    price: "$130,000.00",
    color: "Red",
  },
  {
    id: 3,
    name: "Mercedes _ 3",
    href: "#",
    imageSrc: require("../Assets/Merceds_3.jpg"),
    imageAlt: "Brand new mecredes.",
    price: "$170,000.00",
    color: "Red",
  },
  {
    id: 4,
    name: "Audi _ 1",
    href: "#",
    imageSrc: require("../Assets/Audi_1.jpg"),
    imageAlt: "Brand new Audi.",
    price: "$140,000.00",
    color: "Yellow",
  },
  {
    id: 5,
    name: "Audi _ 2",
    href: "#",
    imageSrc: require("../Assets/Audi_2.jpg"),
    imageAlt: "Brand new Audi.",
    price: "$130,000.00",
    color: "Black",
  },
  {
    id: 6,
    name: "Audi _ 3",
    href: "#",
    imageSrc: require("../Assets/Audi_3.jpg"),
    imageAlt: "Brand new Audi.",
    price: "$180,000.00",
    color: "White",
  },

  // More products...
];

export default function ProductRow() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-red-900">
          Customers purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
