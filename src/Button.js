


function Button({text,bgColor,textColor,functionRun})
{
    return(
        <button 
        className="btn"
        onClick={functionRun}
        style={{backgroundColor: bgColor, color: textColor }}>{text}</button>
    )
}

export default Button