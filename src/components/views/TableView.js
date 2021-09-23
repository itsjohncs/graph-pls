import json from "json";


export interface Props {
    data: json;
}


function TableView({data}: Props) {
    return <div>{JSON.stringify(data)}</div>;
}


export default TableView;

