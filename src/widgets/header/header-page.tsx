import { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import avatar from '../../shared/assets/png/avatar.png';
import logo from '../../shared/assets/svg/logo.svg';
import logoTitle from '../../shared/assets/svg/logo_title.svg';

import s from './header-page.module.scss';

import { Menu } from 'widgets/menu';

export const HeaderPage = (): ReactElement => (
  <header className={s.header}>
    <div className={s.container}>
      <NavLink to="/">
        <div className={`${s.header__logo} ${s.logo}`}>
          <div className={s.logo__main}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.logo__title}>
            <img src={logoTitle} alt="title" />
          </div>
        </div>
      </NavLink>
      <div className={s.header__content}>
        <Menu menuId="burger" />
        <div className={s.header__title}>Библиотека</div>
        <div className={`${s.header__login} ${s.login}`}>
          <NavLink to="/auth">auth</NavLink>
          <div className={s.login__title}>Привет, Иван!</div>
          <div className={s.login__avatar}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  </header>
);
