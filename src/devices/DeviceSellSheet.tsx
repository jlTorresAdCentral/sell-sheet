import TableComponent from "../components/table/table"
import { RowFile } from "../models/table.model"

const filasArchivo = {
    rows: [
        ["Device Model", "Brand", "Capacity", "Color", "IMEI", "Grade", "Cost"],
        ["Sony Xperia 1 V", "Oppo", "1024", "Azure green", "605bced6-00c0-4cec-8572-f8d856de7336", "A", "4.99"],
        ["Alcatel 3L (2022)", "Nokia", "1024", "lightning", "5df88445-7c8a-4c5f-ad73-d1ba974a9ddc", "C", "4.99"],
        ["Sony Xperia 1 V", "ZTE", "32", "Ocen blue", "e7d2fcbf-8eb3-45c0-b9df-34cae0d3fc67", "A", "880.90"],
        ["LG V60 ThinQ", "Alcatel", "16", "purple mate", "25d9e16a-82c5-4fe9-8c36-e70fbe8d48b2", "A", "250.00"],
        ["Meizu 20 Pro", "LG", "128", "red", "503b74cb-f377-420a-b933-487ba2f5450b", "C", "10"],
        ["Oppo Reno 10", "Vivo", "512", "Space Gray", "a81ec0e1-040f-488c-ba81-512e12880263", "D", "10"],
        ["LG V60 ThinQ", "BlackBerry", "1024", "Ocen blue", "7ade3558-63c7-463e-b474-2ca3b80d96c5", "A", "999"],
        ["LG Wing 5G", "Huawei", "256", "Ocen blue", "0afc39b2-d3ea-44ed-8d4f-657708fc8f1b", "C", "250.00"],
        ["OnePlus Nord 3", "Asus", "512", "Ocen blue", "dd6f3f2b-1b78-4149-954f-a9320015963c", "B", "525.50"],
        ["Xiaomi 13 Ultra", "Asus", "16", "lightning", "e3082fb7-fd3a-403e-8997-41969a3a569f", "C", "880.90"],
        ["Huawei P60 Pro", "Alcatel", "32", "Ocen blue", "2c0ec758-afe1-4ffa-b626-222d31a15954", "D", "999"],
    ]
} as RowFile

const DeviceSellSheetComponent = () => {
    return (
        <TableComponent
            title="Devices"
            rowsFile={filasArchivo}
        />
    )
}

export default DeviceSellSheetComponent

