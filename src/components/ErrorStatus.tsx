export interface Props {
    error: Error|null;
}


function ErrorStatus(props: Props) {
    if (props.error) {
        return <div>{props.error.name}: {props.error.message}</div>;
    } else {
        return <div>No syntax errors.</div>
    }
}


export default ErrorStatus;
