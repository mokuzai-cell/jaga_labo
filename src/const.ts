export interface Order {
  id: string
  time: number
  type: number
  count: number
  allMoney: number
}

export const goods = {
  types: ['じゃがバター（￥３５０）', '　＋バター２倍（＋￥５０）'],
  minCount: 1,
  maxCount: 99,
  money: [350, 400],
}
