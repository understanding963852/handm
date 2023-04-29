import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Hone",
    "Sale",
    "지속가능성성",
  ];

  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate("/login");
  };
  const gotoMain = () => {
    navigate("/");
  };
  const search = (event) => {
    //console.log("key");
    if (event.key == "Enter") {
      console.log(event.key);
      //입력한 검색어를 읽어와서 url를 읽어준다
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="login-button" onClick={gotoLogin}>
        <FontAwesomeIcon icon={faUser} />
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>
      <div className="nav-section">
        <img
          onClick={gotoMain}
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>
      <div className="menu_list">
        <ul>
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="input">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyDown={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
