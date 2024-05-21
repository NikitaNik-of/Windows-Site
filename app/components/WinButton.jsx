const WinButton = ( {state = "",  className, children, ...props} ) => {
    switch (state) {
        case "default":
            return(
            <div className={"bg-[#c2c2c2] shadow-w98-w " + className}>
                <div className="shadow-w98-b px-3 py-px w-full h-full">
                    <div {...props}>{children}</div>
                </div>
            </div>
            )

        case "in":
            return(
            <div className={"bg-[#c2c2c2] shadow-w98-w-in " + className}>
                <div className="shadow-w98-g-in px-3 py-px w-full h-full">
                    <div {...props}>{children}</div>
                </div>
            </div>
            )

        case "fit":
            return(
            <div className={"bg-[#c2c2c2] shadow-w98-w h-5 " + className}>
                <div className="shadow-w98-b w-full h-full">
                    <div className="relative w-full h-full" {...props}>{children}</div>
                </div>
            </div>
            )    
        default:
            return(<div>{children}</div>);
    }
}

export default WinButton;