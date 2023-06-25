import './App.scss';

import TopNav from './Components/TopNav';
import PageRoutes from './Routes';


function App() {
  return (
    <div className='bookstore_body'>
      <TopNav />
      <div className='mt-5 page_height'>
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
