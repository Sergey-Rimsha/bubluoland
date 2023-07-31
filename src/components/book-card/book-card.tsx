import { memo } from 'react';

import { NavLink, useParams } from 'react-router-dom';

import book_default from '../../assets/jpg/book_defualt.jpg';
import { Paths } from '../../enum';
import { BookingI } from '../../interface';
import { getBookUrl, getDateTransformCard, getStars } from '../../utils';
import { ButtonCard } from '../button-card';

import s from './book-card.module.scss';

interface BookCardI {
  view: 'GRID' | 'LIST';
  rating: number | null;
  title: string;
  authors: string[];
  image: {
    url: string;
  } | null;
  id: number;
  booking: BookingI | null;
  search: string;
}

export const BookCard = memo(
  ({ id, title, authors, rating, image, booking, view, search }: BookCardI) => {
    const { category } = useParams();

    const showRating = (rate: number | null) => (
      <div className={s.rating}>
        {rate === null
          ? 'ещё нет оценок'
          : getStars(rate).map((item, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <img key={i} className={s.rating__item} src={item} alt="star" />
            ))}
      </div>
    );

    let disabled = false;

    let titleBtn = 'Забронировать';

    let buttonType: 'Primary' | 'Secondary' = 'Secondary';

    if (booking) {
      if (booking.order) {
        titleBtn = getDateTransformCard(booking.dateOrder);
        disabled = true;
      }
    } else {
      buttonType = 'Primary';
    }

    const customTitle = (str: string): any => {
      if (!search) return str;
      const regexp = new RegExp(search, 'ig');
      const matchValue = str.match(regexp);

      if (matchValue) {
        return str.split(regexp).map((string, index, array) => {
          if (index < array.length - 1) {
            const c = matchValue.shift();

            return (
              // eslint-disable-next-line react/no-array-index-key
              <span key={index}>
                {string}
                <span data-test-id="highlight-matches" className={s.searchTitle}>
                  {c}
                </span>
              </span>
            );
          }

          return string;
        });
      }

      return str;
    };

    const bookCardList = () => (
      <div className={s.listCard}>
        <div className={s.listCard__img}>
          <img src={getBookUrl(image) || book_default} alt="book_image" />
        </div>
        <div className={s.listCard__content}>
          <div className={s.listCard__header}>
            <div className={s.listCard__title}>{customTitle(title)}</div>
            <div className={s.listCard__authors}>{authors.join(',')}</div>
          </div>
          <div className={s.listCard__wrap}>
            {showRating(rating)}
            <div className={s.listCard__button}>
              <ButtonCard title={titleBtn} disabled={disabled} type={buttonType} />
            </div>
          </div>
        </div>
      </div>
    );

    const bookCardGrid = () => (
      <div className={s.gridCard}>
        <div className={s.gridCard__img}>
          <img src={getBookUrl(image) || book_default} alt="book_image" />
        </div>
        <div className={s.gridCard__rating}>{showRating(rating)}</div>
        <div className={s.gridCard__content}>
          <div className={s.gridCard__title}>{customTitle(title)}</div>
          <div className={s.gridCard__authors}>{authors[0]}</div>
        </div>
        <div className={s.gridCard__button}>
          <ButtonCard title={titleBtn} disabled={disabled} type={buttonType} />
        </div>
      </div>
    );

    return (
      <NavLink data-test-id="card" to={`${Paths.BOOKS}/${category}/${id}`}>
        {view === 'GRID' ? bookCardGrid() : bookCardList()}
      </NavLink>
    );
  },
);
