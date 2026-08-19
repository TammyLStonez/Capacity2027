import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Hero from '../pages/public/Hero/Hero';
import About from '../pages/public/About/About';
import Blog from '../pages/public/Blog';
import BlogPost from '../pages/public/BlogPost';
import Donate from '../pages/public/Donate';
import Join from '../pages/public/Join';

// Admin routes intentionally omitted for now.
// Triple-tap + PIN gate + Dashboard get added after first deployment.

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Layout>
  );
}
