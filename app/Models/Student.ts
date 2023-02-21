
import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true})
  public code: string

  @column({ isPrimary: true })
  public name: string

    }
