import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("examples").del();

    // Inserts seed entries
    await knex("examples").insert([
        { id: "76621d41-23ed-4585-aafe-0d25519fcd82", exampleTitle: "örnek başlık 1", exampleDesc: "örnek açıklama 1" },
        { id: "536fe4dc-cc4e-4942-b876-586da34a8f7c", exampleTitle: "örnek başlık 2", exampleDesc: "örnek açıklama 2" },
        { id: "8f292805-637b-4291-886a-4e466fb3296a", exampleTitle: "örnek başlık 3", exampleDesc: "örnek açıklama 3" },
    ]);
};
