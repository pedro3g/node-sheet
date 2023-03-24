import { randomBytes } from 'crypto';
import Exceljs from 'exceljs';
import Worksheet from './worksheet';

class Workbook {
  protected workbook: Exceljs.Workbook;

  constructor() {
    this.workbook = new Exceljs.Workbook();
  }

  addWorksheet(worksheet: Worksheet): this {
    const newWorksheet = this.workbook.addWorksheet(worksheet.pageName);

    const columns = worksheet.data.map((column) => column.header);

    const rows: any[] = [];

    let index = 0;

    for (const column of worksheet.data) {
      newWorksheet.columns = columns;

      for (const cell of column.cells) {
        rows[index] = { ...rows[index], [column.header.key]: cell.value };

        index++;
      }

      index = 0;
    }

    newWorksheet.addRows(rows);

    return this;
  }

  async export(
    worksheetName: string = randomBytes(8).toString('hex'),
    exportType: 'xlsx' | 'buffer'
  ): Promise<Exceljs.Buffer | undefined> {
    if (exportType === 'buffer') {
      return await this.workbook.xlsx.writeBuffer();
    }

    await this.workbook.xlsx.writeFile(
      worksheetName.endsWith('.xlsx') ? worksheetName : `${worksheetName}.xlsx`
    );
  }
}

export default Workbook;
