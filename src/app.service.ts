import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  arr : number[] = [10,20,30,40,50]
  getHello(): string {
    return 'Hello World!';
  }
  getsum(a:number,b:number):number{
    this.arr.push(a+b);
    console.log(this.arr);
    return a + b;
  }
}
