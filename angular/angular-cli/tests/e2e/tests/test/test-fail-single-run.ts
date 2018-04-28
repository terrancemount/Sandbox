import { ng } from '../../utils/process';
import { writeFile } from '../../utils/fs';
import { expectToFail } from '../../utils/utils';


export default function () {
  // TODO(architect): Delete this test. It is now in devkit/build-webpack.

  // Fails on single run with broken compilation.
  return writeFile('projects/test-project/src/app.component.spec.ts', '<p> definitely not typescript </p>')
    .then(() => expectToFail(() => ng('test', '--watch=false')));
}
