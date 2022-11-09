var splitRequire = require('split-require')

async function app () {
  var { foo, bar } = await splitRequire('./test')
  foo(bar)
}
