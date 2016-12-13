import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let heroes =[
      { id: 1,name:'Wolverine'},
      { id: 2,name:'Prof. X'},
      { id: 3,name:'Magneto'},
      { id: 4,name:'Quicksilver'},
      { id: 5,name:'Jene Gray'}
    ];
    return {heroes};
  }
}
