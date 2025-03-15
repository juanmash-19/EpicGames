export interface TestDAO {
  status: number
  message: string
  data: DataTestDAO[]
}


export interface DataTestDAO {
  name: string
  id_table: number | string
  description: string
}
