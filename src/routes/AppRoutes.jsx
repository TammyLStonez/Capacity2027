import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/public/Home';
import About from '../pages/public/About';
import Blog from '../pages/public/Blog';
import BlogPost from '../pages/public/BlogPost';
import Donate from '../pages/public/Donate';
import Join from '../pages/public/Join';
import Manifesto from '../pages/public/Manifesto';

// Admin routes intentionally omitted for now.
// Triple-tap + PIN gate + Dashboard get added after first deployment.

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Layout>
  );
}
