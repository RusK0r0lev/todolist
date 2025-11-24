type ButtonPropsType = {
    title: string;
    callBack?: () => void;
};
function Button({ title, callBack }: ButtonPropsType) {
    return <button onClick={callBack}>{title}</button>;
}
export default Button;
