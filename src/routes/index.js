import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import FeedBack from '~/pages/FeedBack';
import APIpage from '~/pages/APIpage';


const publicRoutes = [
  { path: '/home', components: Home },
  { path: '/following', components: Following },
  { path: '/profile', components: Profile },
  { path: '/upload', components: Upload,},
  { path: '/search', components: Search },
  { path: '/feedback', components: FeedBack },
  { path: '/', components: APIpage },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
