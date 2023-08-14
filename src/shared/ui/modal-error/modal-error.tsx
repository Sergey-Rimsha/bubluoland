import { ReactElement, useEffect, useState } from 'react';

import classNames from 'classnames';

import { setAppError } from 'entities/app/model/app-reducer';
import { ErrorResponseI } from 'interface';
import iconClose from 'shared/assets/icon/icon_close.svg';
import errorIcon from 'shared/assets/icon/icon_error.svg';
import { ErrorMessage } from 'shared/enum/error';
import { useAppDispatch, useAppSelector } from 'shared/model/hooks';
import s from 'shared/ui/modal-error/modal-error.module.scss';

export const ModalError = (): ReactElement => {
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState<boolean>(false);

  const error = useAppSelector<ErrorResponseI | null>(state => state.app.error);

  const onClickCloseModal = (): void => {
    dispatch(setAppError(null));
  };

  useEffect(() => {
    if (error) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [error]);

  return (
    <div className={s.modal}>
      <div className={s.container}>
        <div
          data-test-id="error"
          className={classNames(s.modal__box, { [`${s.modal__box_show}`]: showModal })}
        >
          <div className={s.modal__wrap}>
            <img className={s.modal__image} src={errorIcon} alt="error" />
            <div className={s.modal__message}>{ErrorMessage.MESSAGE}</div>
          </div>
          <button className={s.modal__button} onClick={onClickCloseModal} type="button">
            <img src={iconClose} alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};
