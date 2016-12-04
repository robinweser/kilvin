import rollup from 'rollup'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolver from 'rollup-plugin-node-resolve'

// Small helper to error and exit on fail
const errorOnFail = err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
}

const babelPlugin = babel({
  babelrc: false,
  presets: [ 'es2015-rollup', 'stage-0' ],
  plugins: [ 'add-module-exports' ]
})
const nodeResolverPlugin = nodeResolver({
  jsnext: true,
  main: true,
  skip: [ 'react-fela' ]
})

const commonJSPlugin = commonjs({ include: 'node_modules/**' })
const uglifyPlugin = uglify()

const plugins = [ babelPlugin, nodeResolverPlugin, commonJSPlugin ]

function rollupConfig(minify) {
  return {
    entry: 'modules/index.js',
    plugins: minify ? plugins.concat(uglifyPlugin) : plugins
  }
}

function bundleConfig(minify) {
  return {
    format: 'umd',
    globals: {
      'react-fela': 'ReactFela'
    },
    moduleName: 'Kilvin',
    dest: 'dist/kilvin' + (minify ? '.min' : '') + '.js',
    sourceMap: !minify
  }
}

rollup.rollup(rollupConfig(process.env.NODE_ENV === 'production')).then(bundle => {
  bundle.write(bundleConfig(process.env.NODE_ENV === 'production'))
  console.log('Successfully bundled Kilvin' + (process.env.NODE_ENV === 'production' ? ' (minified).' : '.'))
}).catch(errorOnFail)
