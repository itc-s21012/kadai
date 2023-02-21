 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class AuthController {
  public async index (ctx: HttpContextContract) {
    const data = {
      title: 'Kadai',
      message: 'sasa',
    }
    return ctx.view.render('auth/index', data)
  }
}
