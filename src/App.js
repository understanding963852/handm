import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
// 1.전체상품페이지, 로그인,상품상세이미지
//1-2 네비게이션바
// 2.전체상품페이지에서는 전체 상품을 볼수 있다
// 3.로그인 버튼을 누르면 로그인 페이지가 나온다
// 4.상품디테일을 눌렀으나 로그인이 안되어있을경우에는 로그인페이지가 나온다
// 5.로인인이 되어있다면 상품디테일페이지를 볼수 있다
// 6.로그아웃버튼을 클릭하면 로그아웃이 된다.
// 7.로그아웃이 되면 상품 디테일페이지를 볼수 있다. 다시 로그인페이지가 보인다
// 8. 로그인이 되면 로그아웃이 보이고 로그아웃이 되면 로그인 페이지가 보인다.
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("로그인");
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
