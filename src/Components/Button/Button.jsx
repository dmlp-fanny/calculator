import './Button.scss';

export const Button = (props) => {

    const handleClick = () => {
        props.clickButton(props.value)
    }

    return (
            <button className={props.className} onClick={handleClick}>{props.value}</button>
    )
}