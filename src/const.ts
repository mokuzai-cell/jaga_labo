export interface Order{
    time:number,
    type:number,
    count:number,
}

export const goods={
    types:["小","中","大"],
    minCount:1,
    maxCount:100,
    money:300,
}