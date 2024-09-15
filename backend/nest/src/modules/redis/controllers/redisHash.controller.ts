import { Controller, Post, Get, Delete, Body, Query,Patch } from '@nestjs/common';
import { RedisHashService } from '../services/redisHash.service';

@Controller('redisHash')
export class RedisHashController {
  constructor(private readonly redisService: RedisHashService) {}

  @Post('setHash')
  async setHash(
    @Body() body: { key: string; value: Record<string, any> }
  ): Promise<string> {
    await this.redisService.setHash(body.key, body.value,3600);
    return 'Hash set successfully';
  }

  @Patch('updateHashField')
  async updateHashField(
    @Body() body: { key: string; field: string; value: any }
  ): Promise<string> {
    await this.redisService.updateFieldHash(body.key, body.field, body.value);
    return `Field ${body.field} updated successfully in hash ${body.key}`;
  }

  @Get('getHash')
  async getHash(@Body() body:{key: string}): Promise<Record<string, any> | null> {
    return this.redisService.getHash(body.key);
  }

  @Delete('delete')
  async deleteValue(@Body() body:{key: string}): Promise<string> {
    await this.redisService.deleteValueHash(body.key);
    return 'Value deleted successfully';
  }
}



