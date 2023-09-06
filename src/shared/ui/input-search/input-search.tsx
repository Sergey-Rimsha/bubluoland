import React, { ChangeEvent, useCallback, useState } from 'react';

import classNames from 'classnames';

import iconSearch from 'shared/assets/icon/icon_search.svg';
import iconSearchActive from 'shared/assets/icon/icon_search_active.svg';
import s from 'shared/ui/input-search/input-search.module.scss';

interface InputSearchPropsI {
  search: string;
  onChangeSearchInput: (text: string) => void;
}

export const InputSearch = React.memo(({ search, onChangeSearchInput }: InputSearchPropsI) => {
  const [focusInput, setFocusInput] = useState<boolean>(false);

  const onHandlerClickInput = (): void => {
    setFocusInput(prevState => !prevState);
  };

  const onChangeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChangeSearchInput(e.currentTarget.value);
    },
    [onChangeSearchInput],
  );

  const onHandlerFocusInput = (): void => {
    setFocusInput(true);
  };

  const onHandlerCloseInput = (): void => {
    setFocusInput(false);
  };

  const onHandlerBlurInput = (): void => {
    setFocusInput(false);
  };

  const searchImg = focusInput ? iconSearchActive : iconSearch;

  return (
    <div className={s.input}>
      <button
        data-test-id="button-search-open"
        className={s.input__img}
        onClick={onHandlerClickInput}
        type="button"
      >
        <img src={searchImg} alt="search" />
      </button>
      <div className={classNames(s.input__box, { [`${s.input__box_show}`]: focusInput })}>
        <input
          data-test-id="input-search"
          className={classNames(s.input__item, {
            [`${s.input__item_change}`]: focusInput,
          })}
          onFocus={onHandlerFocusInput}
          onBlur={onHandlerBlurInput}
          onChange={onChangeSearch}
          value={search}
          type="text"
          placeholder="Поиск книги или автора…"
        />
        <button
          data-test-id="button-search-close"
          className={classNames(s.input__close, {
            [`${s.input__close_show}`]: focusInput,
          })}
          onClick={onHandlerCloseInput}
          type="button"
        >
          <span>{}</span>
          <span>{}</span>
        </button>
      </div>
    </div>
  );
});
