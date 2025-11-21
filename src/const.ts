export interface Order {
  id: string
  time: number
  type: number
  count: number
  allMoney: number
}

export const goods = {
  types: ['小', '中', '大'],
  minCount: 1,
  maxCount: 99,
  money: [200, 300, 400],
}
