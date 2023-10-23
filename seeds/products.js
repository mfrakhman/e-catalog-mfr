/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      name: "Espresso",
      description:
        "A concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.",
      price: 30000,
      image:
        "https://images.unsplash.com/photo-1596952954288-16862d37405b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cappuccino",
      description:
        "A coffee drink that is composed of a shot of espresso and steamed milk, with a layer of foamed milk on top.",
      price: 34000,
      image:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Latte",
      description:
        "A coffee drink made with espresso and steamed milk. It is typically topped with a small amount of foam.",
      price: 34000,
      image:
        "https://images.unsplash.com/photo-1593443320739-77f74939d0da?auto=format&fit=crop&q=80&w=1936&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mocha",
      description:
        "A chocolate-flavored variant of a latte, often with whipped cream and chocolate shavings on top.",
      price: 36000,
      image:
        "https://images.unsplash.com/photo-1596078841242-12f73dc697c6?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Americano",
      description:
        "A coffee made by diluting a shot of espresso with hot water, giving it a similar strength to a regular drip coffee.",
      price: 30000,
      image:
        "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Macchiato",
      description:
        "An espresso with a small amount of frothy milk on top. 'Macchiato' means 'stained' or 'spotted' in Italian.",
      price: 37000,
      image:
        "https://images.unsplash.com/photo-1557772611-722dabe20327?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Vietnam Drip",
      description:
        "A traditional Vietnamese coffee made using a drip filter, known for its strong and bold flavor.",
      price: 30000,
      image:
        "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?auto=format&fit=crop&q=80&w=2077&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);
};
