import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
import TurmCondition from "../pages/turmCon/TurmCondition";
import ForgotPass from "../pages/forgotpass/ForgotPass";
import ResetPass from "../pages/resetpass/ResetPass";
import CoronaAcc from "../pages/corona-acc/Corona-Acc";
import RehaVo from "../pages/reha-vo/Reha-vo";
import Signup from "../pages/sign-up/Signup";
import Challenges from "../pages/admin/challange/Challenges";
import CoursePanel from "../pages/admin/coursepanel/CoursePanel";
import Profile from "../pages/profile/Profile";
import Contact from "../pages/contactalex/Contact";
import AllTrainers from "../pages/alltrainers/AllTrainers";
import Trainer from "../pages/trainer/Trainer";
import TrainerDetail from "../pages/trainer/TrainerDetail";
import NewsPanel from "../pages/newspanel/NewsPanel";
import AllCourses from "../pages/allcourses/AllCourses";
import CourseRating from "../pages/allcourses/CourseRating";
import UpFollowing from "../pages/UpFollowing/UpFollowing";
import Coursesdetail from "../pages/allcourses/courses_detail/coursesdetail";
import PlacesTraining from "../pages/trainee/places_training/PlacesTraining";
import Mapsss from "../pages/maps/Mapsss";
import Gallery from "../pages/gallery/Gallery";
import UserHistory from "../pages/user/History";
import ContactOne from "../pages/Chat/ContactOne";
import ContactTwo from "../pages/Chat/ContactTwo";
import EditProfile from "../pages/profile/EditProfile";
import ContactAdmin from "../pages/admin/ContactAdmin";
import MyCourses from "../pages/trainee/MyCourses";
import MyHistory from "../pages/trainee/MyHistory";
import Participant from "../pages/trainee/Participant";
import MyLicenses from "../pages/trainee/MyLicenses";
import TrainingTimes from "../pages/trainee/TrainingTimes";

function RootRoute() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/turm-condition" element={<TurmCondition />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/log-out" element={<Logout />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/forgot-password" element={<ForgotPass />} />
          <Route exact path="/reset-password" element={<ResetPass />} />
          <Route exact path="/corona-accepted" element={<CoronaAcc />} />
          <Route exact path="/reha-vo" element={<RehaVo />} />
          <Route exact path="/challenges" element={<Challenges />} />
          <Route exact path="/course-panel" element={<CoursePanel />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/edit-profile" element={<EditProfile />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/all-trainers" element={<AllTrainers />} />
          <Route exact path="/trainer" element={<Trainer />} />
          <Route exact path="/trainer-detail" element={<TrainerDetail />} />
          <Route exact path="/news-panel" element={<NewsPanel />} />
          <Route exact path="/all-courses" element={<AllCourses />} />
          <Route exact path="/course-rating" element={<CourseRating />} />
          <Route exact path="/upload-following" element={<UpFollowing />} />
          <Route exact path="/course-detail" element={<Coursesdetail />} />
          <Route exact path="/places-training" element={<PlacesTraining />} />
          <Route exact path="/map" element={<Mapsss />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/user-history" element={<UserHistory />} />
          <Route exact path="/contact-process" element={<ContactOne />} />
          <Route exact path="/contact-resolve" element={<ContactTwo />} />
          <Route exact path="/contact-admin" element={<ContactAdmin />} />
          <Route exact path="/my-courses" element={<MyCourses />} />
          <Route exact path="/my-history" element={<MyHistory />} />
          <Route exact path="/participant" element={<Participant />} />
          <Route exact path="/my-licenses" element={<MyLicenses />} />
          <Route exact path="/training-times" element={<TrainingTimes />} />
        </Routes>
      </Router>
    </>
  );
}

export default RootRoute;
