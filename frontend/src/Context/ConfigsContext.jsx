import React, { createContext } from 'react';
import { fetchUrl } from '../config.js';
import { generateNotifyError, generateNotifySuccess } from './Context.jsx'
export const ConfigsContext = createContext();

const ConfigsProvider = ({children}) =>{
	const getConfig = async (key) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/config/${key}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const res = await response.json();
                return res
            } else {
                const error = await response.json();
                generateNotifyError('Hubo un error, prueba mas tarde!')
            }
        } catch (error) {
            generateNotifyError('Hubo un error, prueba mas tarde!')
            throw new Error(error)
        };
    };
    return (
        <ConfigsContext.Provider value={{getConfig}}>
        {children}
        </ConfigsContext.Provider>
    )
};

export default ConfigsProvider
