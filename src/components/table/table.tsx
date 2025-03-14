import { useEffect, useState } from "react"
import { DataType, RowColumn, RowFile, TableColumn, TableRow } from "../../models/table.model"

interface TableProps {
    title: string
    rowsFile: RowFile
}

const TableComponent = ((props: TableProps) => {
    const [allRowsChecked, setAllRowsChecked] = useState(false)
    const [tableColumns, setTableColumns] = useState<TableColumn[]>([])
    const [tableRows, setTableRows] = useState<TableRow[]>([])
    const [operationColumns, setOperationColumns] = useState<TableColumn[]>([])
    const [showDeleteColumn, setShowDeleteColumn] = useState(false)
    const [columnIndexDeletion, setColumnIndexDeletion] = useState<number | null>(null)

    useEffect(() => {
        if (props.rowsFile.rows.length > 0) {
            const newColumns = tableColumns
            setTableColumns(
                newColumns.splice(
                    0,
                    tableColumns.length,
                    ...props.rowsFile.rows[0].map((rowColumn: string) => ({
                        value: rowColumn,
                        type: DataType.TEXT
                    }))
                )
            )

            const newRows = props.rowsFile.rows.slice(1).map((row: string[], index: number) => ({
                id: index,
                isChecked: false,
                columns: row.map((rowColumn, rowIndex) => ({
                    name: rowColumn,
                    column: tableColumns[rowIndex]
                }))
            })) as TableRow[]
            setTableRows(newRows)

            addMissingRowColumns(newColumns.length)
        }
    }, [])

    useEffect(() => {
        setOperationColumns(tableColumns
            .filter((column) =>
                column.type == DataType.COST ||
                column.type == DataType.SELLING_PRICE
            )
        )
    }, tableColumns)

    const addMissingRowColumns = (totalColumns: number) => {
        const isMissingRowColumns = tableRows.filter((row: TableRow) => row.columns.length != totalColumns).length > 0

        if (isMissingRowColumns) {
            setTableRows(prevTableRows =>
                prevTableRows.map((row: TableRow) => {
                    if (row.columns.length != totalColumns) {
                        const missingColumns = totalColumns - row.columns.length;
                        return {
                            ...row,
                            columns: [
                                ...row.columns,
                                ...Array(missingColumns).fill({
                                    value: "",
                                    type: DataType.TEXT,
                                    decimals: null,
                                    tagOptions: null,
                                    tax: null
                                } as TableColumn)
                            ]
                        };
                    }

                    return row;
                })
            );
        }
    }

    const handleColumnDeletion = (show: boolean) => {
        setShowDeleteColumn(show)
        if (!show) {
            setColumnIndexDeletion(null)
        }
    }

    return (
        <div className="tableContainer">
            <table>
                <thead>

                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
})

export default TableComponent