import React, {useState} from "react";
import jmsepath from "jmespath";

import JSONDataInput from "components/JSONDataInput";
import QueryInput from "components/QueryInput";
import parseChartDescriptions from "parseChartDescriptions";
import json from "json"

import "App.css";


function splitError<T>(func: () => T): [T, null] | [null, Error] {
    try {
        return [func(), null];
    } catch (err) {
        if (err instanceof Error) {
            return [null, err];
        }

        throw err;
    }
}


function App() {
    const [query, setQuery] = useState("[foo[*].first, foo[*].last]");
    const [rawData, setRawData] = useState('{"foo": [{"first": 1, "last": 2}, {"first": 3, "last": 4}]}');

    const [data, jsonParseError] = splitError(function() {
        return JSON.parse(rawData) as json;
    });

    const [chartDescription, queryParseError] = splitError(function() {
        return jmsepath.search(data, query) as json;
    });

    const [chart, descriptionParseError] = splitError(function() {
        return parseChartDescriptions(chartDescription);
    });

    return (
        <div className="App">
            <QueryInput
                value={query}
                onChange={setQuery}
                error={queryParseError}
            />
            <JSONDataInput
                value={rawData}
                onChange={setRawData}
                error={jsonParseError}
            />
            <pre>{chartDescription && JSON.stringify(chartDescription)}</pre>
            <pre>{chart && JSON.stringify(chart)}</pre>
        </div>
    );
}


export default App;
