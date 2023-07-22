export interface Response<T> {
    succeeded:boolean,
    errors:string[],
    message:string,
    data:T
  }