import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthContextProvider } from "./context/Auth";
import { SettingsContextProvider } from "./context/Settings";
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./pages/error/ErrorPage";
import AuthPage from "./pages/auth/AuthPage";
import { TabContextProvider } from "./context/Tab";
import EditorPage from "./pages/editor/EditorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <AuthPage />,
    },
    {
        path: "/edit",
        element: <EditorPage />,
    },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthContextProvider>
            <SettingsContextProvider>
                <TabContextProvider>
                    <Navbar />
                    <RouterProvider router={router} />
                </TabContextProvider>
            </SettingsContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
);
