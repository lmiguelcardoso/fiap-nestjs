import { IsNotEmpty, IsNumber, IsString} from "class-validator";


export class CreateProductDTO{
    @IsString()
    name:string;

    @IsNotEmpty()
    price:number;

}