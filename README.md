# NODE-SHEET

![GitHub repo size](https://img.shields.io/github/repo-size/pedro3g/node-sheet?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/pedro3g/node-sheet?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/pedro3g/node-sheet?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/github/issues/pedro3g/node-sheet?style=for-the-badge)


> A simple option based on the exceljs library to create spreadsheets.

### Disclaimer

The project is under development and is not fit to be used in real projects.

## 🚀 Installing node-sheet

To install the node-sheet, simply turn the command:

```
npm install node-sheet
```
or
```
yarn add node-sheet
```

## ☕ Using node-sheet

Here's an example of how to create a basic spreadsheet
```
import { Workbook, Worksheet } from 'node-sheet'

void (async () => {
  const workbook = new Workbook();
  const worksheet = new Worksheet('Test page');

  worksheet.setColumns([
    {
      key: 'col-a',
    },
    {
      key: 'col-b',
    },
    {
      key: 'col-c',
    },
  ]);

  worksheet.addRows([
    {
      'col-a': 'Column A',
      'col-b': 'Column B',
      'col-c': 'Column C',
    },
    {
      'col-a': 'Column A',
      'col-b': 'Column B',
      'col-c': 'Column C',
    },
  ]);

  workbook.addWorksheet(worksheet);

  await workbook.export('test-sheet.xlsx');
})();

```

You can insert multiple pages into a worksheet. To create a new page, create a new page instance.

```
new Worksheet('Page name');
```
Define the columns that you will use in your worksheet with the setColumns method.

```
const workbook = new Workbook();
const worksheet = new Worksheet('Page name');

worksheet.setColumns([
  {
    key: 'col-a',
    // You can explore some styles within the object
    // but your implementation may contain bugs
  },
  {
    key: 'col-b',
  },
  {
    key: 'col-c',
  },
]);
```

After you define the columns, you can insert columns by setting the keys. Each key represents a cell in a row and is not required making the cell empty.
```
const workbook = new Workbook();
const worksheet = new Worksheet('Page name');

worksheet.setColumns([
  {
    key: 'col-a',
    // You can explore some styles within the object
    // but your implementation may contain bugs
  },
  {
    key: 'col-b',
  },
  {
    key: 'col-c',
  },
]);

worksheet.addRows([
  {
    'col-a': 'Column A',
    'col-b': 'Column B',
    'col-c': 'Column C',
  },
  {
    'col-a': 'Column A',
    'col-b': 'Column B',
    'col-c': 'Column C',
  },
]);
```

After you insert all the rows you want, insert the page into the worksheet.
```
const workbook = new Workbook();
const worksheet = new Worksheet('Page name');

worksheet.setColumns([
  {
    key: 'col-a',
    // You can explore some styles within the object
    // but your implementation may contain bugs
  },
  {
    key: 'col-b',
  },
  {
    key: 'col-c',
  },
]);

worksheet.addRows([
  {
    'col-a': 'Column A',
    'col-b': 'Column B',
    'col-c': 'Column C',
  },
  {
    'col-a': 'Column A',
    'col-b': 'Column B',
    'col-c': 'Column C',
  },
]);

workbook.addWorksheet(worksheet);

// Export the spreadsheet
await workbook.export('test-sheet.xlsx');
```

## 📫 Contributing to node-sheet
To contribute node-sheet, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <nome_branch>`.
3. Make your changes and confirm them: `git commit -m '<mensagem_commit>'`
4. Climb your changes: `git push`
5. Create the pull request.

Alternatively, see the GitHub documentation at [how to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Contributors

We thank the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/pedro3g">
        <img src="https://avatars3.githubusercontent.com/u/30221184" width="100px;" alt="Foto do Pedro Henrique no GitHub"/><br>
        <sub>
          <b>Pedro Henrique</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
