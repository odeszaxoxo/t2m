import Navigation from 'Components/Navigation';
import Button from 'Components/UI/Button';
import ModalComponent from 'Components/UI/Modal';
import useResize from 'Hooks/useResize';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect, useMemo } from 'react';
import Policy from 'Components/Policy';
import useUserActions from 'Hooks/useUserActions';
import { useRecoilValue } from 'recoil';
import userAtom from 'Recoil/Atoms/User';
import LogoIcon from 'Icons/LogoIcon';
import CloseIcon from 'Icons/CloseIcon';
import MaleIcon from 'Icons/MaleIcon';
import FemaleIcon from 'Icons/FemaleIcon';
import NotSelectedIcon from 'Icons/NotSelectedIcon';

const GENDERS_AVATARS = [NotSelectedIcon, MaleIcon, FemaleIcon];

export default function Header() {
  const { isPhone } = useResize();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const user = useRecoilValue(userAtom);
  const { signOut } = useUserActions();

  const userEmail = useMemo(() => {
    const email = user.name || 'Неизвестный пользователь';
    return email;
  }, [user]);

  const GenderIcon = useMemo(() => {
    const Icon = GENDERS_AVATARS[user.gender || 0];
    return Icon;
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <a href="/">
        <LogoIcon width={isPhone ? 102 : 175} height={isPhone ? 19 : 32} />
      </a>
      {!isPhone && (
        <div className="header__user-control">
          <GenderIcon width={50} height={50} />
          {userEmail}
          <Button onClick={signOut} variant>
            Выйти
          </Button>
        </div>
      )}
      {isPhone && location.pathname !== '/signin' && (
        <>
          <button
            className="header__button"
            type="button"
            onClick={() => {
              setMenuOpen(true);
            }}
          >
            menu
          </button>
          <ModalComponent isOpen={isMenuOpen} setOpen={setMenuOpen} isMenu>
            <div className="header__modal-top">
              <a href="/">
                <LogoIcon
                  width={isPhone ? 102 : 175}
                  height={isPhone ? 19 : 32}
                />
              </a>
              <button
                className="header__button"
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <CloseIcon width={12} height={12} />
              </button>
            </div>
            <div className="header__user-control">
              <GenderIcon width={50} height={50} />
              {userEmail}
              <Button onClick={signOut}>Выйти</Button>
            </div>
            <Navigation />
            <Policy />
          </ModalComponent>
        </>
      )}
    </header>
  );
}
