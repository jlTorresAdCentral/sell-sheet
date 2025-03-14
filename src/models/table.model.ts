export interface RowFile {
    rows: string[][]
}

export interface TableRow {
    id: number
    isChecked: boolean
    columns: RowColumn[]
}

export interface TableColumn {
    value: String
    type: DataType
}

export enum DataType {
    TEXT = "Text",
    NUMBER = "Number",
    LIST = "List",
    COST = "Cost",
    SELLING_PRICE = "Selling Price",
    TAX = "Tax",
    ID_CODE = "Id Code",
    TOTAL = "Total",
    CALENDAR = "Calendar",
}

export interface RowColumn {
    name: string,
    column: TableColumn
}