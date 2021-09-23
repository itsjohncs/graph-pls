export interface Props {
    value: string;
    onChange: (value: string) => void;
}


function QueryInput(props: Props) {
    return (
        <input
            value={props.value}
            onInput={function(event) {
                props.onChange(event.currentTarget.value);
            }}
        />);
}


export default QueryInput;
