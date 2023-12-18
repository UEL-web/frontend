import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Loading from "../components/Loading";
import HomePage from "../pages/HomePage";
import MainLayout from "../Layouts/MainLayout";
import {PATH} from "../constants/paths";


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={
               <MainLayout />
            } >

                <Route path={PATH.HOME} element={
                    <Suspense fallback={<Loading />}>
                        <HomePage />
                    </Suspense>
                } />

            </Route>
        </Routes>
    )
}