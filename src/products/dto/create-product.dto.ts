import { 
    IsNumber, 
    IsOptional, 
    IsString, 
    Min, 
    MinLength 
} from "class-validator";

export class CreateProductDto {

    @IsString()
    @MinLength(3)
    name!: string;

    @IsNumber()
    @Min(0)
    price!: number;

    @IsNumber()
    @Min(0)
    quantity!: number;

    @IsString()
    @IsOptional()
    description?: string;
}
