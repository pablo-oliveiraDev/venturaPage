import React, { useContext } from "react";
import * as S from "../assets/Styles/Components/footer";
import { AuthContext } from "../../context/Auth";
import {
  FaStepBackward,
  FaStepForward,
  FaForward,
  FaBackward,
} from "react-icons/fa";

export default function Footer() {
  const { currentPage, pages, setCurrentPage } = useContext(AuthContext);
  const curPath = window.location.pathname.split("/")[1];
  function backAction() {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextAction() {
    if (currentPage <( pages - 1)) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <>
      <S.MyNavbar bg="primary" variant="dark" fixed="bottom">
        <S.MyContainer>
          <S.MyNavbar.Brand className="brand">DESIGNER BY PROJECT<a target='_blank' href="https://www.google.com" className='spanNome'>PABLO</a> </S.MyNavbar.Brand>
          {curPath === "principal" && (
            <S.Header>
              <S.MySpan>Pages</S.MySpan>
              <S.MyPages>
                <button onClick={() => setCurrentPage(0)}>
                  <FaBackward size={20} />
                </button>
                <button onClick={() => backAction()}>
                  <FaStepBackward size={20} />
                </button>
                <S.MyButton>{currentPage+1}</S.MyButton>
                <button onClick={() => nextAction()}>
                  <FaStepForward size={20} />
                </button>
                <button onClick={() => setCurrentPage(pages - 1)}>
                  <FaForward size={20} />
                </button>
              </S.MyPages>
            </S.Header>
          )}
        </S.MyContainer>
      </S.MyNavbar>
    </>
  );
}
