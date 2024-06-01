import { Module } from '@nestjs/common';
import { ResepModule } from './resep/resep.module';
@Module({
  imports: [ResepModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
