import './Screen.scss'

export const Screen = (props) => {

    return (
        <div className='screen'> 
            <div className="screen_pastInputs">{props.past}</div>
            <div className="screen_currentInput">{props.current}</div>
        </div>
    )
}