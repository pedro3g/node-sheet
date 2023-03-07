# NODE-SHEET (beta)

![GitHub repo size](https://img.shields.io/github/repo-size/pedro3g/node-sheet?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/pedro3g/node-sheet?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/pedro3g/node-sheet?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/github/issues/pedro3g/node-sheet?style=for-the-badge)


> A simple way to create spreadsheets.

### Disclaimer

It is not recommended to use this library in real projects.

## Installing node-sheet

Use one of the commands below to install the node-sheet:

```
npm install node-sheet
yarn add node-sheet
pnpm add node-sheet
```

## Using node-sheet



| Class     | Description |
| --------- | ----------- |
| Workbook  | Main class that manages the worksheet |
| Worksheet | Class that manages each sheet page |
| Column    | Class used to build each column of the worksheet |
| Header    | Class used to add the headers of each column that is able to define patterns for all the cells of the column |
| Cell      | Class used to insert rows to the column


Here's how you can create a basic spreadsheet containing name, age and gender:
```
const { Worksheet, Column, Header, Cell, Workbook } = require('node-sheet');

const worksheet = new Worksheet('Page 1');  // Page 1 is the page name

worksheet.addColumns([
  new Column({
    header: new Header({ title: 'Name' }),
    cells: [new Cell('John'), new Cell('Maria'), new Cell('Joseph')],
  }),
  new Column({
    header: new Header({ title: 'Age' }),
    cells: [new Cell(20), new Cell(30), new Cell(40)],
  }),
  new Column({
    header: new Header({ title: 'Gender' }),
    cells: [new Cell('Male'), new Cell('Female'), new Cell('Male')],
  }),
]);

new Workbook().addWorksheet(worksheet).export('worksheet-name');
```

> Pay attention: the cells will be organized according to the order they are arranged in `cells`.

the `export` method will create a sheet at the root named according to the string passed by parameter.
The result will be a spreadsheet like this:

| Name   | Age | Gender |
| ------ | --- | ------ |
| John   | 20  | Male   |
| Maria  | 30  | Female |
| Joseph | 40  | Male   |
