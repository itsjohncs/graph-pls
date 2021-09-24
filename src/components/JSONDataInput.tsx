import ErrorStatus from "components/ErrorStatus";


export interface Props {
    value: string;
    onChange: (value: string) => void;
    error: Error | null;
}


function JSONDataInput(props: Props) {
    return (
        <div>
            <textarea
                value={props.value}
                onInput={function(event) {
                    props.onChange(event.currentTarget.value);
                }}
            />
            <ErrorStatus error={props.error} />
        </div>);
}


export default JSONDataInput;
