import { ReactElement, useEffect, useState } from 'react';

import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import s from './main-page.module.scss';

import {
  getBooksTC,
  setBooksSearch,
  setBooksSortRating,
} from 'entities/books/model/books-reducer';
import { BooksStateI, CategoriesI } from 'interface';
import iconFilter from 'shared/assets/icon/icon_filter_lg.svg';
import iconFilterRevers from 'shared/assets/icon/icon_filter_revers.svg';
import iconGrid from 'shared/assets/icon/icon_grid.svg';
import iconGridActive from 'shared/assets/icon/icon_grid_active.svg';
import iconList from 'shared/assets/icon/icon_list.svg';
import iconListActive from 'shared/assets/icon/icon_list_active.svg';
import { useAppDispatch, useAppSelector } from 'shared/model/hooks';
import { BookCard, InputSearch } from 'shared/ui';

export const MainPage = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const { items, sort, search } = useAppSelector<BooksStateI>(state => state.books);
  const categories = useAppSelector<CategoriesI[]>(state => state.categories.categories);

  const [viewCards, setViewCards] = useState<'GRID' | 'LIST'>('GRID');

  const contentView = classNames({
    [`${s.main__content_grid}`]: viewCards === 'GRID',
    [`${s.main__content_list}`]: viewCards === 'LIST',
  });

  let books = items;

  const filter = categories.find(el => el.path === category);

  if (filter) {
    books = items.filter(book => book.categories.find(name => name === filter.name));
  }
  if (search) {
    books = books.filter(item => {
      const matchValue = search.toLowerCase();

      return item.title.toLowerCase().includes(matchValue);
    });
  }

  const onClickView = (): void => {
    setViewCards(prevState => (prevState === 'GRID' ? 'LIST' : 'GRID'));
  };

  const onClickHandlerSortRating = (): void => {
    dispatch(setBooksSortRating(!sort));
  };

  const onChangeSearchInput = (text: string): void => {
    dispatch(setBooksSearch(text));
  };

  const emptyDataText = (): ReactElement => {
    if (search.length >= 1) {
      return (
        <div className={s.main__message} data-test-id="search-result-not-found">
          По запросу ничего не найдено
        </div>
      );
    }

    return (
      <div className={s.main__message} data-test-id="empty-category">
        В этой категории книг ещё нет
      </div>
    );
  };

  useEffect(() => {
    dispatch(getBooksTC());
  }, [dispatch]);

  return (
    <section className={s.main}>
      <div className={s.main__header}>
        <form className={s.from}>
          <InputSearch search={search} onChangeSearchInput={onChangeSearchInput} />
          <div data-test-id="sort-rating-button" className={s.from__filter}>
            <button onClick={onClickHandlerSortRating} type="button">
              <img src={sort ? iconFilter : iconFilterRevers} alt="sort" />
              <span>По рейтингу</span>
            </button>
          </div>
        </form>
        <div className={s.menu}>
          <button
            className={classNames(s.menu__item, {
              [`${s.menu__item_active}`]: viewCards === 'GRID',
            })}
            type="button"
            onClick={onClickView}
            data-test-id="button-menu-view-window"
          >
            <img src={viewCards === 'GRID' ? iconGridActive : iconGrid} alt="grid" />
          </button>
          <button
            className={classNames(s.menu__item, {
              [`${s.menu__item_active}`]: viewCards === 'LIST',
            })}
            type="button"
            onClick={onClickView}
            data-test-id="button-menu-view-list"
          >
            <img src={viewCards === 'LIST' ? iconListActive : iconList} alt="table" />
          </button>
        </div>
      </div>
      <div
        className={classNames(s.main__content, { [`${contentView}`]: books.length >= 1 })}
      >
        {books.length >= 1
          ? books.map(card => (
              <BookCard
                key={card.id}
                id={card.id}
                view={viewCards}
                authors={card.authors}
                title={card.title}
                booking={card.booking}
                image={card.image}
                rating={card.rating}
                search={search}
              />
            ))
          : emptyDataText()}
      </div>
    </section>
  );
};
