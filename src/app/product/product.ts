export class Product{
    image:string;
    name:string;

    description:string;
    unitCost:number;

    constructor(image:string, name:string, description :string, unitCost:number){
        this.image = image;
        this.name = name;
        this.description = description;
        this.unitCost = unitCost;
    }

    

}