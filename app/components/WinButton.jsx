import Image from "next/image"

const WinButton = ( {img, state = "default", className, children, onClick, onMouseUp, ...props} ) => {

    // default, in, start, startbtn, startbtnIn, bar, barIn, fit

    switch (state) {
        case "default":
            return(
            <div onClick={onClick} className={"min-w-[75px] min-h-[23px] focus:outline-dotted focus:-outline-offset-4 focus:outline-1 focus:outline-blackу text-center active:shadow-w98-pressed bg-[#c2c2c2] shadow-w98-def " + className}>
                <div className="px-4 py-1 w-full h-full">
                    <div {...props}>{children}</div>
                </div>
            </div>
            )

        case "start":
            return(
            <div onClickCapture={onClick} className={"bg-[#c2c2c2] shadow-w98-def " + className}>
                <div className="w-full h-full flex p-1">
                    <div className="[writing-mode:vertical-lr] rotate-180 pr-1 pt-1 from-blue-950 to-blue-600 bg-gradient-to-t via-blue-950 text-white tracking-wider font-inter">
                        <text className="text-lg font-black">NikitaNik_os</text>
                        <text className="text-xl font-light">98</text>
                    </div>
                    <div className="flex flex-col justify-end w-full" {...props}>{children}</div>
                </div>
            </div>
            )

        case "startbtn":
            return(
            <div onClick={onClick} className={"bg-[#c2c2c2] shadow-w98-def " + className}>
                <div className="px-3 py-px w-full h-full">
                    <div {...props}>{children}</div>
                </div>
            </div>
            )

        case "startbtnIn":
            return(
            <div onClick={onClick} className={"bg-[#c2c2c2] shadow-w98-pressed " + className}>
                <div className="px-3 py-px w-full h-full">
                    <div {...props}>{children}</div>
                </div>
            </div>
            )
    
        case "bar":
            return(
            <div onClick={onClick} className={"active:shadow-w98-pressed active:pt-[2px] active:pl-[2px] bg-[#c2c2c2] shadow-w98-def " + className}>
                <div className="px-2 py-px w-full h-full flex items-center">
                    <Image src={img} height={16} className="mr-1"/>
                    <div {...props}>{children}</div>
                </div>
            </div>
            )

        case "barIn":
            return(
            <div onClick={onClick} className={"bg-[#e6e6e6] shadow-w98-pressed " + className}>
                <div className="px-2 py-px w-full h-full flex items-center">
                    <Image src={img} height={16} className="mr-1"/>
                    <div {...props}>{children}</div>
                </div>
            </div>
            )
        case "in":
            return(
            <div onClick={onClick} className={"bg-[#c2c2c2] shadow-w98-pressed " + className}>
                <div className="px-4 py-1 w-full h-full">
                    <div className="flex h-full" {...props}>{children}</div>
                </div>
            </div>
            )

        case "fit":
            return(
            <div onClick={onClick} className={"bg-[#c2c2c2] shadow-w98-def h-5 " + className}>
                <div className="w-full h-full">
                    <div className="relative w-full h-full" {...props}>{children}</div>
                </div>
            </div>
            )    
        default:
            return(<div>{children}</div>);
    }
}

export default WinButton;