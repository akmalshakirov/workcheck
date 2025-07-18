import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error(
            "useAdmin hook AdminProvider ichida ishlatilishi kerak!"
        );
    }

    return context;
};
