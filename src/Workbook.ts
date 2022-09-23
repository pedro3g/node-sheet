import { Workbook as ExternalWorkbook } from 'exceljs';
import Worksheet from './Worksheet';

class Workbook {
  protected workbook: ExternalWorkbook;

  constructor() {
    this.workbook = new ExternalWorkbook();
  }

  public addWorksheet(worksheet: Worksheet): void {
    this.workbook.addWorksheet(worksheet.pageName);
    this.workbook.getWorksheet(worksheet.pageName).columns = worksheet.columns;

    worksheet.rows.forEach((data) =>
      this.workbook.getWorksheet(worksheet.pageName).addRow(data)
    );
  }

  public async export(fileName: string): Promise<void> {
    await this.workbook.xlsx.writeFile(
      fileName.includes('.xlsx') ? fileName : `${fileName}.xlsx`
    );
  }
}

export default Workbook;
