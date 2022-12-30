# mini-css-extract-plugin asset publicPath bug

Run the build: `npm run build`.

Note that in the built CSS the path to `file2.ext2` has an extra `dist` in the path.

Note that if the webpack config doesn't put the CSS in a subfolder, it works fine.

Note that the built JS has the correct public path for the asset
