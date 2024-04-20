import { useState, createContext } from "react";

const AlertContext = createContext();

export function AlertMessage({ children }) {
    const [error, setError] = useState(null);

    const showAlert = (data) => {
        setError(data);
        setTimeout(() => {
            setError(null);
        }, 3000);
    } 

    return (
        
        <AlertContext.Provider value={ showAlert }>
            <div className="alert alert-danger">
                {error}
            </div>
        </AlertContext.Provider>
    )
}

export default AlertContext;