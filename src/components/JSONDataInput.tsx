export interface Props {
    value: string;
    onChange: (value: string) => void;
}


function JSONDataInput(props: Props) {
    return (
        <textarea
            value={props.value}
            onInput={function(event) {
                props.onChange(event.currentTarget.value);
            }}
        />);
}


export default JSONDataInput;
