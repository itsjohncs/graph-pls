import React, {useState} from "react";
import jmsepath from "jmespath";

import JSONDataInput from "components/JSONDataInput";
import QueryInput from "components/QueryInput";
import ErrorStatus from "components/ErrorStatus";
import TableView from "components/views/TableView";
import json from "json"

import "App.css";


function extract(query: string, data: string): [json|null, Error|null] {
    try {
        return [jmsepath.search(JSON.parse(data), query) as json, null];
    } catch (err) {
        if (err instanceof Error) {
            return [null, err];
        }

        throw err;
    }
}


function App() {
    const [query, setQuery] = useState("foo[*].first");
    const [data, setData] = useState('{"foo": [{"first": "a", "last": "b"}, {"first": "c", "last": "d"}]}');

    const [result, error] = extract(query, data);

    return (
        <div className="App">
            <QueryInput value={query} onChange={setQuery} />
            <JSONDataInput value={data} onChange={setData} />
            <TableView data={result} />
            <ErrorStatus error={error} />
        </div>
    );
}

export default App;
