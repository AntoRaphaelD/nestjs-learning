import { Controller, Get, Param, Body, Query, Post,Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  arr : number[] = [10,20,30,40,50]
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sum/:a/:b')
  getsum(
    @Param('a') a : string,
    @Param('b') b : string
  ){
    console.log(a,b);
    return this.appService.getsum(Number(a),Number(b));
  }
  @Post('users/:id')
createUser(
  @Param('id') id: string,
  @Body('name') name: string,
  @Query('role') role: string,
) {
  return {
    id,
    role,
    name,
  };
}

@Post('user')
returnUser(
  @Body() body : any,
){
  return body;
}

@Delete('/user/:id')
deleteuser(
  @Param('id') id:string)
{
  return `user deleted with id ${id}`;
}

}


