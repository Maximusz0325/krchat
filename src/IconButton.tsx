import "./IconButton.css"

export type IconButtonProps = {
    buttonContent?: string;
    onCLick?: () => void;
    iconName?: string;
}

export function IconButton({buttonContent, onCLick, iconName}) {
    return(
        <button type = "button" className="IconButton" onClick={onCLick}>
            <span className = "material-symbols-outlined">{iconName}</span>
            {buttonContent}
        </button>
    )
}