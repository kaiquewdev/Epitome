Epitome Documentation
=====================

To generate documentation, you can use `node` + `npm` and the info under `package.json`.

```
dchristoff@Dimitars-iMac:~/projects/Epitome (gh-pages):
> npm install .
npm http GET https://registry.npmjs.org/jsdom
npm http GET https://registry.npmjs.org/request
npm http 304 https://registry.npmjs.org/jsdom
npm http 304 https://registry.npmjs.org/request
npm http GET https://registry.npmjs.org/htmlparser
npm http GET https://registry.npmjs.org/cssom
npm http GET https://registry.npmjs.org/contextify
npm http 304 https://registry.npmjs.org/cssom
npm http 304 https://registry.npmjs.org/htmlparser
npm http 304 https://registry.npmjs.org/contextify
npm http GET https://registry.npmjs.org/bindings
npm http 304 https://registry.npmjs.org/bindings

> contextify@0.1.3 install /Users/dchristoff/projects/Epitome/node_modules/jsdom/node_modules/contextify
> node-gyp rebuild

info it worked if it ends with ok 
spawn python [ '/Users/dchristoff/.node-gyp/0.6.16/tools/gyp_addon',
  'binding.gyp',
  '-I/Users/dchristoff/projects/Epitome/node_modules/jsdom/node_modules/contextify/build/config.gypi',
  '-f',
  'make' ]
spawn make [ 'BUILDTYPE=Release', '-C', 'build' ]
  CXX(target) Release/obj.target/contextify/src/contextify.o
  SOLINK_MODULE(target) Release/contextify.node
  SOLINK_MODULE(target) Release/contextify.node: Finished
info done ok 
request@2.9.203 ./node_modules/request

jsdom@0.2.15 ./node_modules/jsdom
├── cssom@0.2.5
├── htmlparser@1.7.6
└── contextify@0.1.3 (bindings@1.0.0)
dchristoff@Dimitars-iMac:~/projects/Epitome (gh-pages):
> npm run-script build

> documentup-docs@0.0.1 build /Users/dchristoff/projects/Epitome
> ./build.js

index.html was created
dchristoff@Dimitars-iMac:~/projects/Epitome (gh-pages):
```

Add staged `index.html` and just push to gh-pages to go live with the latest docs. 
