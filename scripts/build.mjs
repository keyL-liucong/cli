import * as esbuild from 'esbuild'

await esbuild.build({
  bundle: true,
  entryPoints: ['index.ts'],
  outfile: './build/outfile.cjs',
  format: 'cjs',
  platform: 'node',
  target: 'node14',
})