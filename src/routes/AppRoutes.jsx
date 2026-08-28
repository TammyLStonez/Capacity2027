import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';
import Home from '../pages/public/Home/Home.jsx';
import About from '../pages/public/About/About.jsx';
import Blog from '../pages/public/Blog/Blog.jsx';
import BlogPost from '../pages/public/BlogPost/BlogPost.jsx';
import Donate from '../pages/public/Donate/Donate.jsx';
import Join from '../pages/public/Join/Join.jsx';
//import Manifesto from '../pages/public/Manifesto/Manifesto.jsx';
import AdminDashboard from '../pages/admin/AdminDashboard/AdminDashboard.jsx';
import ProtectedAdminRoute from '../components/admin/ProtectedAdminRoute/ProtectedAdminRoute.jsx';

// Admin access: triple-tap the CAPACITY wordmark in the Footer to open the
// PIN gate (see PinGate.jsx / AdminAuthContext.jsx). /admin itself is
// guarded by ProtectedAdminRoute and bounces unauthenticated visitors home,
// so the route isn't discoverable just by trying the URL. It's also kept
// outside the public Layout (no campaign Navbar/Footer) since it's a
// separate, internal surface.

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/manifesto" element={<Manifesto />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/join" element={<Join />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            {/* <AdminDashboard /> */}
          </ProtectedAdminRoute>
        }
      />
    </Routes>
  );
}