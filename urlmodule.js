const { query } = require('express');
const url = require('node:url');


const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.host ;
myURL.hostname ;
// myURL.href = 'https://example.com/bar';
myURL.origin ;
myURL.password = '123' ;
myURL.port ;
myURL.protocol ;
myURL.searchParams;
myURL.username = 'parth';
myURL.toString = 'abcd' ;
myURL.toJSON = 'https://www.example.com' ;
myURL.createObjectURL = 'Hello';
myURL.revokeOejectURL = '#azxs' ;
myURL.canParse = '/doo', 'https://www.example.com' ;

console.log(myURL)
console.log(myURL.pathname)
console.log(myURL.search)
console.log(myURL.hash)
console.log(myURL.host)
console.log(myURL.hostname)
// console.log(myURL.href)
console.log(myURL.origin)
console.log(myURL.password)
console.log(myURL.port)
console.log(myURL.protocol) 
console.log(myURL.searchParams)
console.log(myURL.username)
console.log(myURL.toString)
console.log(myURL.toJSON)
console.log(myURL.createObjectURL)
console.log(myURL.revokeOejectURL)
console.log(myURL.canParse)
 
//-------------------------------------------------------------------------------------------------------//
// newURLSearch() :-------

const a = new URL ('https://www.example.org/?abc=123');
console.log(a.searchParams.get('abc'));
a.searchParams.append('abc', 'xyz');
console.log(a.href);
a.searchParams.delete('abc');
a.searchParams.set('a', 'b');
console.log(a.href)

//-------------------------------------------------------------------------------------------------------//
// newURLSearchParams() :-------

// newURlSearchPaeams(string) 
const params = new URLSearchParams ('?/user=abc&qurey=xyz');
console.log(params.toString())

// newURlSearchPaeams(obj) 
const p = new URLSearchParams ({
    user : 'abc',
    query :['first', 'second'],
});
console.log(p .toString())
console.log(p.getAll('query'));

// newURlSearchPaeams(iterable) 

const p1 = new URLSearchParams([
    ['user', 'abc'],
    ['query','first'],
    ['query','second'],
]);
console.log(p1.toString());


//urlSearchParams.forEach(fn[, thisArg]) :-----------------------//

const p2 = new URL('https://example.org/?a=b&c=d');
p2.searchParams.forEach((value, name, searchParams ) => {
    console.log(name, value, p2.searchParams==searchParams)
});

//urlSearchParams.get(name) :-----------------------------------//

const p3 = new URLSearchParams ({
    name : 'mohan',
    value: '354531',    
});
console.log(p3.get('name'));
console.log(p3.get('value'));
console.log(p3.getAll('name'));

//urlSearchParams.has(name[, value]):-----------------------------//

const p4 = new URLSearchParams({
    name : 'Harry',
    value : '7476',
});
console.log(p4.has('name' [ 'value']))

//urlSearchParams.keys() :-- -------------------------------------//

const p5 = new URLSearchParams('poo=bar&poo=bar');
for (const name of p5.keys()) {
    console.log(name);
}

//urlSearchParams.set(name, value) :- --------------------------------//

const p6 = new URLSearchParams();
p6.append('foo','bar');
p6.append('foo','bar');
p6.append('abd','eds');
console.log(p6.toString())

p6.set('foo','bar');
p6.set('xyz','pqr');
console.log(p6.toString())

//urlSearchParams.sort() :- ----------------------------------------//

const p7 = new URLSearchParams('query[]=abc&type=search&query[]=123');
p7.sort();
console.log(p7.toString());
    
//urlSearchParams[Symbol.iterator]():- ---------------------------------//

const p8 = new URLSearchParams('foo=car&xyz=pqr');
for(const [name, value] of p8){
    console.log(name, value);
}

//url.domainToASCII(domain) :- -----------------------------------------//

console.log(url.domainToASCII('español.com'));

//url.domainToUnicode(domain) :- -----------------------------------------//

console.log(url.domainToUnicode('xn--espaol-zwa.com'));

//url.format(URL[, options]):- -----------------------------------------//

const myURL1 = new URL('https://a:b@xn--espaol-swe.com'); 
console.log(myURL1.href);
console.log(myURL1.toString());
console.log(url.format(myURL1, {fragment: false, unicode: true, auth: false}));