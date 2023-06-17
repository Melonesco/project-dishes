import React, { useState, useEffect, useRef } from "react";
import CreatePersonalRecipe from "./Layout/CreatePersonalRecipe/CreatePersonalRecipe";
import AddRecipe from "./Layout/AddRecipe/AddRecipe";
import CreateFoodRation from "./Layout/CreateFoodRation/CreateFoodRation";
import MyFoodRecipe from "./Layout/MyFoodRecipe/MyFoodRecipe";
import instance from "../../axios";
import MessageFromUser from "./Layout/MessageFromUser";
import AllUsers from "./Layout/AllUsers";
import ManagementRecipe from "./Layout/ManagementRecipe";
import { useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selectors";
import * as S from "./styles";

interface ICulinaryHideaway {
  numberDisplay: number | null;
}

const CulinaryHideaway = ({ numberDisplay }: ICulinaryHideaway) => {
  const [displayedContent, setDisplayedContent] = useState(
    numberDisplay ||
      parseInt(localStorage.getItem("displayedContent") as string) ||
      1
  );
  const [activeButton, setActiveButton] = useState<number>(displayedContent);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const authData = useSelector(selectAuthData);
  const [textareaValue, setTextareaValue] = useState("");

  useEffect(() => {
    localStorage.setItem("displayedContent", String(displayedContent));
  }, [displayedContent]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        modalRef.current &&
        !modalRef.current.contains(target) &&
        !(target instanceof Element && target.matches(S.ButtonSupport))
      ) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = () => {
    instance
      .post("/message", { message: textareaValue })
      .then((res) => console.log(res));
    setTextareaValue("");
    closeModal();
    alert("Ви відправили повідомлення підтримці");
  };

  return (
    <S.CulinaryHideaway>
      <S.Container>
        <S.Buttons>
          <S.Button
            onClick={() => {
              setDisplayedContent(1);
              setActiveButton(1);
            }}
            active={activeButton === 1}
          >
            Створити рецепт
          </S.Button>
          <S.Button
            onClick={() => {
              setDisplayedContent(2);
              setActiveButton(2);
            }}
            active={activeButton === 2}
          >
            Книга рецептів
          </S.Button>
          <S.Button
            onClick={() => {
              setDisplayedContent(3);
              setActiveButton(3);
            }}
            active={activeButton === 3}
          >
            Створити раціон
          </S.Button>
          <S.Button
            onClick={() => {
              setDisplayedContent(4);
              setActiveButton(4);
            }}
            active={activeButton === 4}
          >
            Мої раціони
          </S.Button>
          {!authData?.adminStatus ? (
            <>
              <S.ButtonSupport onClick={openModal}>
                Зв’язатись з адміністрацією
              </S.ButtonSupport>
              {showModal && (
                <S.Modal ref={modalRef}>
                  <S.ModalField
                    placeholder="Напишіть"
                    maxLength={400}
                    value={textareaValue}
                    onChange={handleTextareaChange}
                  />
                  <S.ModalButton onClick={handleSubmit}>
                    відправити
                  </S.ModalButton>
                </S.Modal>
              )}
            </>
          ) : (
            <>
              <S.Span />
              <S.Button
                onClick={() => {
                  setDisplayedContent(5);
                  setActiveButton(5);
                }}
                active={activeButton === 5}
              >
                Повідомлення
              </S.Button>
              <S.Button
                onClick={() => {
                  setDisplayedContent(6);
                  setActiveButton(6);
                }}
                active={activeButton === 6}
              >
                Переглянути користувачів
              </S.Button>
              <S.Button
                onClick={() => {
                  setDisplayedContent(7);
                  setActiveButton(7);
                }}
                active={activeButton === 7}
              >
                Керування рецептами
              </S.Button>
            </>
          )}
        </S.Buttons>
        <S.Content>
          {displayedContent === 1 && <CreatePersonalRecipe />}
          {displayedContent === 2 && <AddRecipe />}
          {displayedContent === 3 && <CreateFoodRation />}
          {displayedContent === 4 && <MyFoodRecipe />}
          {displayedContent === 5 && <MessageFromUser />}
          {displayedContent === 6 && <AllUsers />}
          {displayedContent === 7 && <ManagementRecipe />}
        </S.Content>
      </S.Container>
    </S.CulinaryHideaway>
  );
};

export default CulinaryHideaway;
