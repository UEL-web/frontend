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
import CartPage from "../pages/CartPage";
import HeaderLayout from "../layouts/HeaderLayout";
import ProfilePage from "../pages/ProfilePage";
import PaymentResult from "../pages/PaymentResult";
import MyCoursesPage from "../pages/MyCoursesPage";
import MyCourseTabTage from "../components/MyCourseTabTage";
import DocumentDetailPage from "../pages/DocumentDetailPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import HomePageNew from "../pages/HomePageNew";
import NotFoundPage from "../pages/NotFoundPage";
import PolicyPage01 from "../pages/PolicyPage01";
import PolicyPage03 from "../pages/PolicyPage03";
import PolicyPage02 from "../pages/PolicyPage02";


export default function AppRouter() {
    return (
        <Routes>
                <Route path={PATH.HOME} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <HomePageNew />
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

                <Route path={PATH.PROFILE} element={
                    <Suspense fallback={<Loading />}>
                        <HeaderLayout>
                            <ProfilePage />
                        </HeaderLayout>
                    </Suspense>
                } />

                <Route path={PATH.PAYMENT_SUCCESS} element={
                    <Suspense fallback={<Loading />}>
                        <HeaderLayout>
                            <PaymentResult />
                        </HeaderLayout>
                    </Suspense>
                } />

                <Route path={PATH.MY_COURSE + "/learning/"} element={
                    <Suspense fallback={<Loading />}>
                        <HeaderLayout>
                           <>
                               <MyCourseTabTage />
                               <MyCoursesPage />
                           </>
                        </HeaderLayout>
                    </Suspense>
                } />

                <Route path={PATH.COURSE + "/:id"} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <CourseDetail />
                        </MainLayout>
                    </Suspense>
                } />

                <Route path={PATH.BLOG + "/:id"} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <BlogDetailPage />
                        </MainLayout>
                    </Suspense>
                } />

            <Route path='/404' element={
                <Suspense fallback={<Loading />}>
                    <MainLayout>
                        <NotFoundPage />
                    </MainLayout>
                </Suspense>
            } />

            <Route path='/policy-1' element={
                <Suspense fallback={<Loading />}>
                    <MainLayout>
                        <PolicyPage01 />
                    </MainLayout>
                </Suspense>
            } />

            <Route path='/policy-2' element={
                <Suspense fallback={<Loading />}>
                    <MainLayout>
                        <PolicyPage02 />
                    </MainLayout>
                </Suspense>
            } />

            <Route path='/policy-3' element={
                <Suspense fallback={<Loading />}>
                    <MainLayout>
                        <PolicyPage03 />
                    </MainLayout>
                </Suspense>
            } />


            <Route path={PATH.DOCUMENT + "/:id"} element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            <DocumentDetailPage />
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
                        <HeaderLayout>
                            <LoginPage />
                        </HeaderLayout>
                    </Suspense>
                } />

            <Route path={PATH.CART} element={
                <Suspense fallback={<Loading />}>
                    <MainLayout>
                        <CartPage />
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

            <Route
                path='/homenew'
                element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout>
                            {/*<RegisterPage />*/}
                            <HomePageNew />
                        </MainLayout>
                    </Suspense>
                }
            />
        </Routes>
    )
}