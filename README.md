# renovate-encrypt

npm module for encrypting secrets for the renovateapp.com service.

Usage: install with `npm i -g` and then echo or cat stdin to `renovate-encrypt`.

Example: `cat ~/.npmrc | renovate-encrypt` (encrypt whole .npmrc file)

Or alternatively, use with [generate-npm-token](https://npmjs.com/package/generate-npm-token) to first generate a new npm token and then echo it to this script, e.g.

`echo "abcde-fghij-lmnop-qrstuv-wxyz" | renovate-encrypt`
