import { Controller, Get, Req, Query } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { ListingsRequest } from './listingsRequest';

@Controller('listings')
export class ListingsController {

    constructor(private readonly listingsService: ListingsService) {}

    @Get()
    findAll(@Query() request: ListingsRequest): any {
      return this.listingsService.findAll(request);
    }
}
