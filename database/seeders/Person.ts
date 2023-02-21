import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Person from "App/Models/Person";

export default class extends BaseSeeder {
  public async run () {
    await Person.createMany([{
      name: 'yukitaka',
      code: 's21012'
    }])
    // Write your database queries inside the run method

  }
}
