import {createContext, useContext, useEffect, useState} from 'react';

const SESSION_KEY = 'capacity2027_admin_authed';

const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN;

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
    const [isGateOpen, setGateOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'true'
    );
    const [error, setError] = useState('')

    useEffect(() => {
        if (isAuthenticated) {
            sessionStorage.setItem(SESSION_KEY, 'true');
        } else {
            sessionStorage.removeItem(SESSION_KEY);
        }
    }, [isAuthenticated]);

    const openGate = () => {
        setError('');
        setGateOpen(true);
    };

    const closeGate = () => {
        setGateOpen(false);
        setError('');
    };

    const submitPin = (pin) => {
        if (!ADMIN_PIN) {
            setError('Admin PIN is not configured.');
            return false
        }
        if (pin === ADMIN_PIN) {
            setIsAuthenticated(true);
            setGateOpen(false);
            setError('');
            return true;
        }
        setError('Incorrect PIN. Try again.');
        return false;
    };

    const logout = () => setIsAuthenticated(false);

    return (
        <AdminAuthContext.Provider value={{ isGateOpen, openGate, closeGate, isAuthenticated,submitPin, error,logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
}

export function useAdminAuth() {
    const ctx = useContext(AdminAuthContext);
    if (!ctx) throw new Error('useAdminAuth must be within AdminAuthProvider');
    return ctx;
}