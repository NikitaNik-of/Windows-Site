'use client'
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useRouter } from 'next/navigation'
import Window from ".././components/Window";


const Login = () => {

    const [Active, setActive] = useState(0)
    function isWinActive(cur, id) {
        if (cur == id) return true
        else false
      }

    function emptyClick() {
        setFocusedIcon(-1)
        setActive(-1)
        
    }

    function mouseClick(id) {
        setFocusedIcon(id)
    }
    
    const constraintsRef = useRef(null);
    const [FocusedIcon, setFocusedIcon] = useState(-1)
    const router = useRouter()


  return (
    <div className='bg-[#088] h-screen w-full'>
        <motion.div
        onClickCapture={() => {emptyClick()}}
        ref={constraintsRef}
        id="login"
        className="bg-transparent w-full min-h-full items-center flex justify-center"
        >
            <Window dragConstraints={constraintsRef} img={NaN} key={0} isWinFocused={isWinActive(Active, 0)} titleName={"Вход в систему"} onClick={() => setActive(0)} className={(true? "" : "hidden")}></Window>
        </motion.div>
    </div>
  )
}

export default Login