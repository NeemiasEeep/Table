import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { info } from "@/data/info";

export default function Table(){
    return(
        <>
        <DataTable>
            <Column header=" 1"></Column>
            <Column header=" 2"></Column>
            <Column header=" 3"></Column>
            <Column header=" 4"></Column>
            <Column header=" 5"></Column>
            <Column header=" 6"></Column>
        </DataTable>
        </>
    )
}