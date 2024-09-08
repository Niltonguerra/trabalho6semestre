import { Controller, Post, Get, Delete, Body, Query } from '@nestjs/common';
import { RedisService } from '../services/redis.service';

@Controller('redis')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Post('set')
  async setValue(
    @Body() body: { key: string; value: string }
  ):Promise<String> {
    await this.redisService.setValue(body.key, body.value);
    return 'Value set successfully';
  }
  // Endpoint para obter um valor
  @Get('get')
  async getValue(@Query('key') key: string): Promise<string | null> {
    return this.redisService.getValue(key);
  }

  // Endpoint para deletar um valor
  @Delete('delete')
  async deleteValue(@Query('key') key: string): Promise<string> {
    await this.redisService.deleteValue(key);
    return 'Value deleted successfully';
  }
}



