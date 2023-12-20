import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Loading from "../components/Loading";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import {PATH} from "../constants/paths";
import BlogPage from "../pages/BlogPage";
import CoursePage from "../pages/CoursePage";
import TeacherPage from "../pages/TeacherPage";
import DocumentPage from "../pages/DocumentPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CourseDetail from "../pages/CourseDetail";


export default function AppRouter() {
    return (
        <Routes>
                <Route path={PATH.HOME} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <HomePage />
                        </MainLayout>
                    </Suspense>
                } />

                <Route path={PATH.BLOG} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <BlogPage />
                        </MainLayout>
                    </Suspense>
                } />

                <Route path={PATH.COURSE} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <CoursePage />
                        </MainLayout>
                    </Suspense>
                } />

                <Route path={PATH.COURSE + "/:id"} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <CourseDetail />
                        </MainLayout>
                    </Suspense>
                } />

                <Route path={PATH.TEACHER} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <TeacherPage />
                        </MainLayout>
                    </Suspense>
                } />

                <Route path={PATH.DOCUMENT} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <DocumentPage />
                        </MainLayout>
                    </Suspense>
                } />

                <Route path={PATH.LOGIN} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <LoginPage />
                        </MainLayout>
                    </Suspense>
                } />

                <Route path={PATH.REGISTER} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <RegisterPage />
                        </MainLayout>
                    </Suspense>
                } />
        </Routes>
    )
}