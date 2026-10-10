
import { defineConfig } from 'astro/config';

const isGitHubProjectPage =
  process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHubProjectPage
    ? 'https://techgalary.github.io'
    : 'https://sowmyanarayan.com',
  base: isGitHubProjectPage
    ? '/sowmya-portfolio'
    : '/',
  output: 'static',
});
