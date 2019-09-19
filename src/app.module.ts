import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListingsController } from './listings/listings.controller';
import { ListingsService } from './listings/listings.service';
import { RealtorRepository } from './externals/realtor/realtor.repository';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ListingsController],
  providers: [AppService, ListingsService, RealtorRepository],
})
export class AppModule {}
