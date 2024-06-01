import { Module } from '@nestjs/common';
import { GitHubStrategy } from './strategies/github.strategy';

@Module({
  imports: [],
  providers: [GitHubStrategy],
})
export class AuthGitHubModule {}
