import {ng} from '../../utils/process';
import { copyProjectAsset } from '../../utils/assets';
import { writeMultipleFiles, expectFileToMatch, expectFileMatchToExist } from '../../utils/fs';


function verifyMedia(css: RegExp, content: RegExp) {
  return expectFileMatchToExist('./dist', css)
    .then(fileName => expectFileToMatch(`dist/test-project/${fileName}`, content));
}

export default function() {
  // TODO(architect): Delete this test. It is now in devkit/build-webpack.

  return Promise.resolve()
    .then(() => writeMultipleFiles({
      'projects/test-project/src/styles.css': 'body { background-image: url("./assets/image.png"); }'
    }))
    // use image with file size >10KB to prevent inlining
    .then(() => copyProjectAsset('images/spectrum.png', '.projects/test-project/src/assets/image.png'))
    .then(() => ng('build', '--optimization', '--output-hashing=all'))
    .then(() => expectFileToMatch('dist/test-project/index.html', /runtime\.[0-9a-f]{20}\.js/))
    .then(() => expectFileToMatch('dist/test-project/index.html', /main\.[0-9a-f]{20}\.js/))
    .then(() => expectFileToMatch('dist/test-project/index.html', /styles\.[0-9a-f]{20}\.(css|js)/))
    .then(() => verifyMedia(/styles\.[0-9a-f]{20}\.(css|js)/, /image\.[0-9a-f]{20}\.png/))

    .then(() => ng('build', '--optimization', '--output-hashing=none'))
    .then(() => expectFileToMatch('dist/test-project/index.html', /runtime\.js/))
    .then(() => expectFileToMatch('dist/test-project/index.html', /main\.js/))
    .then(() => expectFileToMatch('dist/test-project/index.html', /styles\.(css|js)/))
    .then(() => verifyMedia(/styles\.(css|js)/, /image\.png/))

    .then(() => ng('build', '--optimization', 'false', '--output-hashing=media'))
    .then(() => expectFileToMatch('dist/test-project/index.html', /runtime\.js/))
    .then(() => expectFileToMatch('dist/test-project/index.html', /main\.js/))
    .then(() => expectFileToMatch('dist/test-project/index.html', /styles\.(css|js)/))
    .then(() => verifyMedia(/styles\.(css|js)/, /image\.[0-9a-f]{20}\.png/))

    .then(() => ng('build', '--optimization', 'false', '--output-hashing=bundles'))
    .then(() => expectFileToMatch('dist/test-project/index.html', /runtime\.[0-9a-f]{20}\.js/))
    .then(() => expectFileToMatch('dist/test-project/index.html', /main\.[0-9a-f]{20}\.js/))
    .then(() => expectFileToMatch('dist/test-project/index.html', /styles\.[0-9a-f]{20}\.(css|js)/))
    .then(() => verifyMedia(/styles\.[0-9a-f]{20}\.(css|js)/, /image\.png/));
}
