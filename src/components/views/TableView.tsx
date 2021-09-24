import {Chart} from "parseChartDescriptions";


export interface Props {
    chart: Chart | null;
}


function TableView({chart}: Props) {
    if (!chart) {
        return null;
    }

    return <div>{JSON.stringify(chart)}</div>;
}


export default TableView;

