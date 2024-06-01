import { Test, TestingModule } from '@nestjs/testing';
import { AuthGitHubController } from './auth-github.controller';

describe('AuthGitHubController', () => {
  let controller: AuthGitHubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthGitHubController],
    }).compile();

    controller = module.get<AuthGitHubController>(AuthGitHubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
