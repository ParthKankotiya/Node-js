const path = require('path');


const a1 = path.basename('C:\\temp\\myfile.html');
const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a1)
console.log(a2)

const a3 = path.extname('pathmodule.js')
console.log(a3)

const a4 = path.format({
    name: 'parth',
    ext : 'txt',
    root: '/',
});
console.log(a4)

const a5= path.isAbsolute('C:\\temp\\myfile.html');
console.log(a5)

const a6= path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(a6)

const a7 = path.normalize('/foo/bar/baz/asdf/sedr/..');
console.log(a7)

const a8 = path.parse('/foo/bar/baz/asdf/flie.txt');
console.log(a8)

const a9 = path.posix;
console.log(a9)

const a10 =path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
console.log(a10)

const s1 = path.resolve('/data/test', './aaa');
console.log(s1)

const s2 = 'foo/bar/baz'.split(path.sep);
console.log(s2)

const s3 = path.toNamespacedPath('/data/test/orand/ddd')
console.log(s3)

const s4 = path.win32;
console.log(s4)