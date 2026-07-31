// Routes aur Route ko import kar rahe hain
import { Routes, Route } from "react-router-dom";

// Pages import kar rahe hain
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateResume from "./pages/CreateResume";
import MyResumes from "./pages/MyResumes";
import Profile from "./pages/Profile";
import ImproveResume from "./pages/ImproveResume";
import AIResult from "./pages/AIResult";


// Protected Route import
import ProtectedRoute from "./routes/ProtectedRoute";
import ResumePreview from "./pages/ResumePreview";

function App() {
  return (

    // Yahin saare routes likhe jayenge
    <Routes>

      {/* Login Page */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Register Page */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* Dashboard Page */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Create Resume Page */}
      <Route
        path="/create-resume"
        element={
          <ProtectedRoute>
            <CreateResume />
          </ProtectedRoute>
        }
      />
      <Route
        path="/improve-resume"
        element={
          <ProtectedRoute>
            <ImproveResume />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-resumes"
        element={
          <ProtectedRoute>
            <MyResumes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-resume/:id"
        element={<CreateResume />}
      />

      <Route
        path="/resume/:id"
        element={<ResumePreview />}
      />

      <Route
        path="/ai-result"
        element={
          <ProtectedRoute>
            <AIResult />
          </ProtectedRoute>
        }
      />

    </Routes>

  );
}

export default App;