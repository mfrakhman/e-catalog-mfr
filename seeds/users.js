/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const bcrypt = require("bcrypt");

const hashPassword = bcrypt.hashSync("admin", 10);

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      username: "mfrakhman",
      password: hashPassword,
      role: "admin",
    },
  ]);
};
