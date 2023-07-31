import React, { ReactElement, useState } from 'react';

import classNames from 'classnames';

import commentAvatar from '../../../../assets/png/comment_avatar.png';
import { CommentI } from '../../../../interface';
import { getBookUrl, getDataTransform, getStars } from '../../../../utils';

import s from './comments.module.scss';

interface CommentsI {
  comments: CommentI[] | undefined;
}

export const Comments = ({ comments = [] }: CommentsI): ReactElement => {
  const [showComments, setShowComments] = useState<boolean>(false);

  const onClickHandlerShowComments = (): void => {
    setShowComments(prevState => !prevState);
  };

  return (
    <div className={s.comment}>
      <div className={s.comment__box}>
        <div className={s.comment__title}>Отзывы</div>
        <div className={s.comment__value}>{comments?.length}</div>
        <button
          data-test-id="button-hide-reviews"
          className={classNames(`${s.comment__arrow} ${s.arrow}`, {
            [`${s.arrow_show}`]: showComments,
          })}
          onClick={onClickHandlerShowComments}
          type="button"
        >
          {}
        </button>
      </div>
      {comments?.map(el => (
        <div
          key={el.id}
          className={classNames(s.comment__content, {
            [`${s.comment__content_show}`]: !showComments,
          })}
        >
          <div className={s.comment__wrap}>
            <img
              className={s.comment__img}
              src={getBookUrl({ url: el.user.avatarUrl }) && commentAvatar}
              alt="avatar"
            />
            <div className={s.comment__block}>
              <div
                className={s.comment__name}
              >{`${el.user.firstName} ${el.user.lastName}`}</div>
              <div className={s.comment__date}>{getDataTransform(el.createdAt)}</div>
            </div>
          </div>
          <div className={s.comment__rating}>
            {getStars(el.rating).map((item, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <img key={i} src={item} alt="star" />
            ))}
          </div>
          <div className={s.comment__message}>{el.text?.length ? el.text : ''}</div>
        </div>
      ))}
      <div data-test-id="button-rating" className={s.comment__button}>
        <button type="button">оценить книгу</button>
      </div>
    </div>
  );
};
