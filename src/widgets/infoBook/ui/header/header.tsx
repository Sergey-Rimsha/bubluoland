import { memo } from 'react';

import { NavLink } from 'react-router-dom';

import { Paths } from 'shared/enum';
import { useAppSelector } from 'shared/model/hooks';
import { CategoriesI } from 'shared/model/interface';
import s from 'widgets/infoBook/ui/header/header.module.scss';

interface HeaderI {
  bookName?: string;
  category?: string;
}

export const Header = memo(({ bookName, category }: HeaderI) => {
  const categories = useAppSelector<CategoriesI[]>(state => state.categories.categories);

  const pathName = categories.find(el => el.path === category);

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.header__box}>
          <NavLink data-test-id="breadcrumbs-link" className={s.header__item} to={`${Paths.BOOKS}/${category}`}>
            <span>{pathName?.name || 'Все книги'}</span>
          </NavLink>
          <span className={s.header__item}>/</span>
          <span data-test-id="book-name" className={s.header__item}>
            {bookName}
          </span>
        </div>
      </div>
    </div>
  );
});
