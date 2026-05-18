import { Injectable } from '@nestjs/common';
import { images } from 'src/Mock/images.mock';

@Injectable()
export class ImagensService {

    findAll(){
        return images
    }
}