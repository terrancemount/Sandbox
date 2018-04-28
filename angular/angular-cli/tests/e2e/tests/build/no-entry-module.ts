import { readFile, writeFile } from '../../utils/fs';
import { ng } from '../../utils/process';


export default async function() {
  // TODO(architect): Delete this test. It is now in devkit/build-webpack.

  const mainTs = await readFile('projects/test-project/src/main.ts');

  const newMainTs = mainTs
    .replace(/platformBrowserDynamic.*?bootstrapModule.*?;/, '')
    + 'console.log(AppModule);';  // Use AppModule to make sure it's imported properly.

  await writeFile('projects/test-project/src/main.ts', newMainTs);
  await ng('build');
}
