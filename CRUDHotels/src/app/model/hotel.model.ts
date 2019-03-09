
  // Hotel class to define this object's properties.

  export class Hotel {
  constructor(
    public id_hotel: number,
    public hotel: string,
    public description: string,
    public id_state: number,
    public stars: number,
    public id_city:number,
    public status:string
  ){}
}
