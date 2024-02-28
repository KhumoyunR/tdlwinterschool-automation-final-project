# TDL WinterSchool Final Project

This project tests website: http://www.automationpractice.pl/

## How to install
Run command:
```
npm install
```

## How to run the tests
Run command:
```
npm run wdio
```

## How to run the tests separately
There are 4 scenarios and each one has its tag for separate execution:

Run command:
```
npm run tag -- "@checkout"
npm run tag -- "@search"
npm run tag -- "@add"
npm run tag -- "@remove"
```

## How to view report
First run the tests and then run command:
```
npm run allure
```