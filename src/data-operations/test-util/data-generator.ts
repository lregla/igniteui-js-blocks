import {DataType} from "../data-util";

const COUNT_ROWS = 5;
const COUNT_COLS = 4;

export interface IDataColumn {
    fieldName: string;
    type: DataType;
}

export class DataGenerator {
    public columns: IDataColumn[] = [];
    public data: object[] = [];
    constructor(countRows = COUNT_ROWS, countCols = COUNT_COLS) {
        this.columns = this.generateColumns(countCols);
        this.data = this.generateData(countRows);
    }
    public generateArray(startValue, endValue) {
        const len = Math.abs(startValue - endValue);
        const decrement = startValue > endValue;
        return Array.from({length: len + 1}, (e, i) => decrement ? startValue - i : startValue + i);
    }
    public getValuesForColumn(data, fieldName) {
        return data.map((x) => x[fieldName]);
    }
    public isSuperset(haystack, arr) {
        return arr.every((val) => haystack.indexOf(val) >= 0);
    }
    private generateColumns(countCols): IDataColumn[] {
        let i: number;
        let len: number;
        let res;
        const defaultColumns: IDataColumn[] = [
            {
                fieldName: "number",
                type: DataType.Number
            },
            {
                fieldName: "string",
                type: DataType.String
            },
            {
                fieldName: "date",
                type: DataType.Date
            },
            {
                fieldName: "boolean",
                type: DataType.Boolean
            }
        ];
        if (countCols <= 0) {
            return defaultColumns;
        }
        if (countCols <= defaultColumns.length) {
            return defaultColumns.slice(0, countCols);
        }
        len = countCols - defaultColumns.length;
        res = defaultColumns;
        for (i = 0; i < len; i++) {
            res.push({
                fieldName: `col${i}`,
                type: DataType.String
            });
        }
        return res;
    }
    private generateData(countRows: number) {
        let i;
        let j;
        let rec;
        let val;
        let col;
        const data = [];
        for (i = 0; i < countRows; i++) {
            rec = {};
            for (j = 0; j < this.columns.length; j++) {
                col = this.columns[j];
                switch (col.type) {
                    case DataType.Number:
                        val = i;
                        break;
                    case DataType.Date:
                        val = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
                        break;
                    case DataType.Boolean:
                        val = !!(i % 2);
                        break;
                    default:
                        val = `row${i}, col${j}`;
                        break;
                }
                rec[col.fieldName] = val;
            }
            data.push(rec);
        }
        return data;
    }
}
