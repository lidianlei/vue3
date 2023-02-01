const NOT_ALIVE = 0;

export class Memory<T = any, V = any> {
  private cache: any = {};
  private alive: number;
  
  constructor(alive = NOT_ALIVE) {
    this.alive = alive * 1000;
    
  }
  
  get<K extends keyof T>(key:K){
    return this.cache[key]
  }
}