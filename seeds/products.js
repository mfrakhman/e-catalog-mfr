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
      image: "https://example.com/images/espresso.jpg",
    },
    {
      name: "Cappuccino",
      description:
        "A coffee drink that is composed of a shot of espresso and steamed milk, with a layer of foamed milk on top.",
      price: 34000,
      image: "https://example.com/images/cappuccino.jpg",
    },
    {
      name: "Latte",
      description:
        "A coffee drink made with espresso and steamed milk. It is typically topped with a small amount of foam.",
      price: 34000,
      image: "https://example.com/images/latte.jpg",
    },
    {
      name: "Mocha",
      description:
        "A chocolate-flavored variant of a latte, often with whipped cream and chocolate shavings on top.",
      price: 36000,
      image: "https://example.com/images/mocha.jpg",
    },
    {
      name: "Americano",
      description:
        "A coffee made by diluting a shot of espresso with hot water, giving it a similar strength to a regular drip coffee.",
      price: 30000,
      image: "https://example.com/images/americano.jpg",
    },
    {
      name: "Macchiato",
      description:
        "An espresso with a small amount of frothy milk on top. 'Macchiato' means 'stained' or 'spotted' in Italian.",
      price: 37000,
      image: "https://example.com/images/macchiato.jpg",
    },
  ]);
};
