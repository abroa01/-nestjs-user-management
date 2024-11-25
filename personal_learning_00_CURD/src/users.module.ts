import { Module } from '@nestjs/common';
import { log } from 'console';
import { feature3Module } from './feature3.module';


@Module({
  imports: [feature3Module],
  controllers: [],
  providers: [],
  exports: []
})
export class Users {
  constructor(){
    log('Users Module')
  }
}
