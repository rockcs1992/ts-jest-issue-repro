# ts-jest-issue-repro
Minimal repro of a ts-jest test issue

## Steps to repro

First simulate a 3rd party package with esm

```
cd my-package
npm pack --pack-destination="./dist"
cd ../
```

Install and test
```
npm install
npm run test
```
