import React, { createContext, useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const Context = createContext();
const ContextProvider = ({children}) => {
    const [open, setOpen] = useState(false)
// sideBar functions 
useEffect(()=>{
    const root = document.querySelector("#root");
    const body = document.querySelector(".content");
    if (!open === true) {
    body.classList.remove("activeSideBar");
    root.classList.remove("activeSideBarRoot");
    } else {
    body.classList.add("activeSideBar");
    root.classList.add("activeSideBarRoot");
    }
    function checkScreenWidth() {
        if (document.querySelector(".activeSideBar") || document.querySelector(".activeSideBarRoot")){
            if (window.innerWidth > 768) {
                setOpen(false)
                body.classList.remove("activeSideBar")
                root.classList.remove("activeSideBarRoot")
            }
        }
    }
    window.addEventListener('resize', checkScreenWidth);
},[open]);

const sideBarOpen = () => {
    if(open === true){
        setOpen(false)
    }else{
        setOpen(true)
    }
}

////////.////////

    return(
        <Context.Provider value={{open, sideBarOpen}}>
            {children}
        </Context.Provider>
    )
}

export const generateNotifySuccess = (msg) => toast.success(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    content : 0,
    theme: "colored",
});

export const generateNotifyError = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    content : 0,
    theme: "colored",
});

export default ContextProvider