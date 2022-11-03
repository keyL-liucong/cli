#!/usr/bin/env zx
import 'zx/globals'

await $`npm run build`
await $`npm publish`