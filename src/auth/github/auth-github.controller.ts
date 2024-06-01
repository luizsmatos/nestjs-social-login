import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GitHubAuthGuard } from './guards/github-auth.guard';
import { Request } from 'express';

@UseGuards(GitHubAuthGuard)
@Controller('auth/github')
export class AuthGitHubController {
  @Get('/login')
  async login() {}

  @Get('/callback')
  async callback(@Req() request: Request) {
    return request.user;
  }
}
