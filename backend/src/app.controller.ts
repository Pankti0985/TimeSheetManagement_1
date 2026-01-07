import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  checkDB() {
    return {
      status: 'success',
      message: 'Database connected successfully',
    };
  }
}
