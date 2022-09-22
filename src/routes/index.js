import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import FeedBack from '~/pages/FeedBack';


const publicRoutes = [
  { path: '/', components: Home },
  { path: '/following', components: Following },
  { path: '/profile', components: Profile },
  { path: '/upload', components: Upload,},
  { path: '/search', components: Search, layout: null },
  { path: '/feedback', components: FeedBack, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
