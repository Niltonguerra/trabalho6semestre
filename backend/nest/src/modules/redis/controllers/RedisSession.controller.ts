import { Post, Body, Delete, Get, Patch, Controller } from '@nestjs/common';
import { RedisSessionService } from '../services/redisSession.service';

@Controller('redisSession')
export class RedisSessionController {
  constructor(private readonly redisService: RedisSessionService) {}

  @Post('setSession')
  async setSession(
    @Body() body: { key: string; value: any }
  ): Promise<string> {
    await this.redisService.setValueSession(body.key, body.value,3600);
    return 'Session set successfully';
  }

  @Get('getSession')
  async getSession(@Body() body: { key: string }): Promise<string | null> {
    return this.redisService.getValueSession(body.key);
  }

  @Delete('deleteSession')
  async deleteSession(@Body() body: { key: string }): Promise<string> {
    await this.redisService.deleteValueSession(body.key);
    return 'Session deleted successfully';
  }
}
