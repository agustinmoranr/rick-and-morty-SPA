import Header from '../templates/Header';
import Character from '../pages/Character';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header')
  const content = null || document.getElementById('content')
  
  header.innerHTML = await Header();
  
  let hash = await getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : NotFound;
  
  content.innerHTML = await render(); 
}

export default router;