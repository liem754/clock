import { Route, Routes } from "react-router-dom";
import { path } from "./ultils/constant";
import DefaultLayout from "./container/DefaultLayout";
import Home from "./container/Home";
import Introduce from "./container/Introduce";
import MenWatch from "./container/MenWatch";
import WomenWatch from "./container/WomenWatch";
import Blog from "./container/Blogs";
import Contact from "./container/Contact";
import BlogFirst from "./container/BlogFirst";
import Blogg from "./container/Blog";
import Text from "./container/text";
import BlogSecond from "./container/BlogSecond";
import BlogThree from "./container/BlogThree";
import { ScrollTop } from "./componets/ScrollTop";
import Test from "./container/text";
import Product from "./componets/Product";
import ProductReview from "./container/ProductReview";
import Search from "./container/Search";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path.DEFAULT} element={<DefaultLayout />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.GT} element={<Introduce />} />
          <Route path={path.MENWATCH} element={<MenWatch />} />
          <Route path={path.WOMENWATCH} element={<WomenWatch />} />
          <Route path={path.BLOG} element={<Blog />}>
            <Route path={path.BLOG3} element={<BlogFirst />} />
            <Route path={path.BLOG2} element={<BlogSecond />} />
            <Route path={path.BLOG1} element={<BlogThree />} />
          </Route>
          <Route path={path.CONTACT} element={<Contact />} />
          <Route path={path.SIMPLE7} element={<ProductReview />} />
          <Route path={path.SIMPLE3} element={<ProductReview />} />
          <Route path={path.CLASSICO1} element={<ProductReview />} />
          <Route path={path.CLASSICO3} element={<ProductReview />} />
          <Route path={path.SEARCH} element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
