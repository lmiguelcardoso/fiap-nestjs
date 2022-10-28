import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateProductDTO } from './dto/createProduct.dto';
import { UpdateProductDTO } from './dto/updateProduct.dto';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService:ProductsService){}

    @Get()
    findAll(){
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id :number){
        return this.productsService.findOne(id)
    }

    @Post()
    create(@Body() req:CreateProductDTO){
        return this.productsService.create()
    }

    @Patch(':id')
    updateProduct(
        @Param('id',ParseUUIDPipe) id:number,
        @Body() req:UpdateProductDTO){
        this.productsService.update(id, req)
    }
}
