
import { defineConfig } from 'astro/config';

const isGitHubProjectPage =
  process.env.GITHUB_PAGES === 'true';
export default defineConfig({
  site: 'https://techgalary.github.io',
  base: '/sowmya-portfolio',
  trailingSlash: 'always',
  output: 'static'
});
