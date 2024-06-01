import Image from "next/image"

const WinButton = ( {img, state = "",  className, children, onClick, ...props} ) => {
    switch (state) {
        case "default":
            return(
            <div onClick={onClick} className={"bg-[#c2c2c2] shadow-w98-w " + className}>
                <div className="shadow-w98-b px-2 py-px w-full h-full">
                    <div {...props}>{children}</div>
                </div>
            </div>
            )

        case "start":
            return(
            <div className={"bg-[#c2c2c2] shadow-w98-w " + className}>
                <div className="shadow-w98-b px-3 py-px w-full h-full">
                    <div {...props}>{children}</div>
                </div>
            </div>
            )

        case "bar":
            return(
            <div onClick={onClick} className={"bg-[#c2c2c2] shadow-w98-w " + className}>
                <div className="shadow-w98-b px-2 py-px w-full h-full flex items-center">
                    <Image src={img} height={16} className="mr-1"/>
                    <div {...props}>{children}</div>
                </div>
            </div>
            )

        case "barIn":
            return(
            <div onClick={onClick} className={"bg-[#e6e6e6] font-bold shadow-w98-w-in " + className}>
                <div className="shadow-w98-b-in px-2 py-px w-full h-full flex items-center">
                    <Image src={img} height={16} className="mr-1"/>
                    <div {...props}>{children}</div>
                </div>
            </div>
            )
        case "in":
            return(
            <div onClick={onClick} className={"bg-[#c2c2c2] shadow-w98-w-in " + className}>
                <div className="shadow-w98-g-in px-2 py-px w-full h-full">
                    <div className="flex h-full" {...props}>{children}</div>
                </div>
            </div>
            )

        case "fit":
            return(
            <div onClick={onClick} className={"bg-[#c2c2c2] shadow-w98-w h-5 " + className}>
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