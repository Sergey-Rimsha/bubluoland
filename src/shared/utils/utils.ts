import axios from 'axios';

import { ErrorMessage } from 'enum';
import { BookI, CategoriesI, ErrorResponseI } from 'interface';
import star from 'shared/assets/icon/icon_star.svg';
import starActive from 'shared/assets/icon/icon_star_active.svg';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getStars = (ratingValue: number) => {
  const stars = [];

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const showStar = (idStar: number) => {
    if (idStar <= ratingValue) {
      return starActive;
    }

    return star;
  };

  // eslint-disable-next-line no-magic-numbers,no-plusplus
  for (let i = 1; i <= 5; i++) {
    stars.push(showStar(i));
  }

  return stars;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getDateTransformCard = (data: string) => {
  const mount = new Date(data).getMonth() + 1;
  const day = new Date(data).getDate();

  // eslint-disable-next-line no-magic-numbers,@typescript-eslint/explicit-function-return-type
  const reformat = (value: number) => (value > 10 ? value : `0${value}`);

  return `занято до ${reformat(day)}.${reformat(mount)}`;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getDataTransform = (data: string) => {
  const dataNew = new Date(data);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return dataNew.toLocaleString('ru', options);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getBookUrl = (img: { url: string } | null) => {
  const BaseUrl = 'https://strapi.cleverland.by';

  if (img) {
    return `${BaseUrl}${img.url}`;
  }

  return '';
};

export const getErrorResponse = (error: unknown): ErrorResponseI => {
  if (axios.isAxiosError(error)) {
    return {
      status: 1,
      name: 'error',
      message: ErrorMessage.MESSAGE,
      details: {},
    };
  }

  return {
    status: 1,
    name: 'error',
    message: ErrorMessage.MESSAGE,
    details: {},
  };
};

export const sortBooksRatingDefault = (books: BookI[]): BookI[] => {
  const booksNotRating = books.filter(el => el.rating === null);

  const booksRating = books.filter(el => el.rating !== null);

  booksRating.sort((a, b) => {
    if (a.rating && b.rating) {
      return b.rating - a.rating;
    }

    return 0;
  });

  return [...booksRating, ...booksNotRating];
};

export const getValueCategories = (
  books: BookI[],
  categories: CategoriesI[],
): CategoriesI[] => {
  const valueCategories: { [n: string]: number } = {};

  categories.forEach(el => {
    valueCategories[el.name] = 0;
  });

  books.forEach(book => {
    book.categories.forEach(key => {
      valueCategories[key] += 1;
    });
  });

  return categories.map(el => ({
    ...el,
    value: valueCategories[el.name],
  }));
};
