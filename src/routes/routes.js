import config from '~/config';
import Main from '~/layouts';
import Home from '~/pages/Home';
import ChooseAuthorBlogs from '~/pages/ChooseAuthorBlogs';
import SearchAuthorBlogs from '~/pages/SearchAuthorBlogs';
import ContentBlog from '~/pages/ContentBlog';

const publicRoutes = [
  { path: config.routes.home, components: Home, layout: Main },
  { path: config.routes.chooseauthorblogs, components: ChooseAuthorBlogs, layout: Main },
  { path: config.routes.searchauthorblogs, components: SearchAuthorBlogs, layout: Main },
  { path: config.routes.contentblog, components: ContentBlog, layout: Main },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
