import config from '~/config';

import FeedBack from '~/pages/FeedBack';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import { HeaderOnly } from '~/layouts';

const publicRoutes = [
  { path: config.routes.feedback, components: FeedBack },
  { path: config.routes.home, components: Home },
  { path: config.routes.following, components: Following },
  { path: config.routes.profile, components: Profile },
  { path: config.routes.upload, components: Upload, layout: HeaderOnly },
  { path: config.routes.search, components: Search },
  { path: config.routes.live, components: Live },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
