/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      name: "product 1",
      description: "product 1 description",
      price: 10000,
      image: "image product 1",
    },
    {
      name: "product 2",
      description: "product 2 description",
      price: 10000,
      image: "image product 2",
    },
    {
      name: "product 3",
      description: "product 3 description",
      price: 10000,
      image: "image product 3",
    },
    {
      name: "product 4",
      description: "product 4 description",
      price: 10000,
      image: "image product 4",
    },
  ]);
};
