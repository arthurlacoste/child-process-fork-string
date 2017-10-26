const path	= require('path')
const { fork } = require('child_process');

let type = 'eval'

module.exports.forkString = function(str, args, opts) {

  // if no args, args is opts, no ?
  if(typeof(args[0])==='undefined' && typeof(args)==='object') {
    opts = args
    args = []
  } else if (typeof(args[0])==='undefined') {
    args = []
  }

  if(opts.type === 'vm') {
    type = 'vm'
  }

  let argsf = [str].concat(args)
  const js = fork(__dirname + path.sep + type + '.js', argsf, opts);
  return js;
}
