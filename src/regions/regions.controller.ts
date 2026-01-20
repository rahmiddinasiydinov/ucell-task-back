import { Controller, Get } from '@nestjs/common';
import { RegionsService } from './regions.service';

@Controller('report')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}


  @Get('')
  findAll() {
    return this.regionsService.findAll();
  }
  @Get('regions')
  findRegion() {
    return this.regionsService.findRegionsReport();
  }
  @Get('total')
  findCountyReport() {
    return this.regionsService.findCountryReport();
  }
}
