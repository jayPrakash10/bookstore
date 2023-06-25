import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import About from '../Pages/About';
import AddBooks from '../Pages/AddBooks';
import Home from '../Pages/Home';
import PageNotFound from '../Pages/404NotFound';
import Search from '../Pages/Search';
import BookDetails from '../Pages/BookDetails/indesx';

const PageRoutes = () => {
    return (
        <Router>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/addbook" element={<AddBooks />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:id" element={<BookDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
    )
}

export default PageRoutes;