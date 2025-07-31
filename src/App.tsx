import { lazy, type FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() =>
    import("./pages/Home").then((module) => ({ default: module.Home }))
);

export const App: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};
