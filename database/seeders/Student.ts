import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Student from "App/Models/Student";

export default class extends BaseSeeder {
  public async run () {
    await Student.createMany([{
      name: 'yukitaka',
      code: 's21012'
    }])
    // Write your database queries inside the run method

  }
}
