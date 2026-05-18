import { Controller, Get, Param } from '@nestjs/common';
import { ImagensService } from 'src/Service/imagens.service';

@Controller('imagens')
export class ImagensController {
    constructor(private readonly imagensService: ImagensService) {}

    @Get()
    getAll(){
        return this.imagensService.findAll()
    }
}
