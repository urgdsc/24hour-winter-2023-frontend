export interface University {
  id: string,
  name: string,
  description: string,
  location: string,

  is_verified: boolean
}

export interface Program {
  id: string,
  name: string
  description: string,

  university: University,

  domestic_annual_tuition: number,
  international_annual_tuition: number

}
