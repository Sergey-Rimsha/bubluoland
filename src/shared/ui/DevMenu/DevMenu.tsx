import React, { ReactElement, useState } from 'react';

import { NavLink } from 'react-router-dom';

import s from './DevMenu.module.scss';

import { Paths } from 'shared/enum';

export const DevMenu = (): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onClickButton = (): void => {
    setShowMenu(prevState => !prevState);
  };
  const customNavLink = (navLink: string): ReactElement => {
    return (
      <NavLink
        className={({ isActive }) => {
          return isActive ? `${s.menu__item} ${s.menu__item_active}` : `${s.menu__item}`;
        }}
        to={navLink}
      >
        {navLink}
      </NavLink>
    );
  };

  return (
    <>
      {showMenu && (
        <div className={s.menu}>
          <div className={s.menu__title}>dev_menu</div>
          <div className={s.menu__content}>
            {customNavLink(Paths.BOOKS)}
            {customNavLink(Paths.AUTH)}
            {customNavLink(Paths.LOGIN)}
            {customNavLink(Paths.REGISTRATION)}
            {customNavLink(`${Paths.AUTH}${Paths.LOGIN}`)}
            {customNavLink(`${Paths.AUTH}${Paths.REGISTRATION}`)}
          </div>
          <button onClick={onClickButton} className={s.menu__button} type="button">
            close_menu
          </button>
        </div>
      )}
      {!showMenu && (
        <button onClick={onClickButton} className={s.button} type="button">
          showMenu
        </button>
      )}
    </>
  );
};
