import { Injectable } from '@nestjs/common';

const UsersMock = [
  {Name: "Kris", Age: 15, Class:"Swordsman"},
  {Name: "Susie", Age: 16, Class:"Brawler"},
  {Name: "Ralsei", Age: undefined, Class:"Mage"},
  {Name: "Noelle", Age: 15, Class:"Mage"},
]

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAllUsers(): any[] {
    return UsersMock;
  }

  getUserById(id:number): any {
    return UsersMock[id];
  }
}
