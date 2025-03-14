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
                <div className="shadow-w98-b w-full h-full flex p-1">
                    <div className="[writing-mode:vertical-rl] rotate-180 pr-1 pt-1 pb-20 from-blue-950 to-blue-600 bg-gradient-to-t via-blue-950 text-white tracking-wider flex items-end font-inter">
                        <text className="text-lg font-black">NikitaNik_os</text>
                        <text className="text-xl font-light">98</text>
                    </div>
                    <div className="flex flex-col justify-end w-48" {...props}>{children}</div>
                </div>
            </div>
            )

        case "startbtn":
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