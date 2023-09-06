import { ReactElement, useState } from 'react';

import { FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import bookDefaultLg from 'shared/assets/jpg/book_default_lg.jpg';
import { getBookUrl } from 'shared/lib/utils';

import 'widgets/infoBook/ui/swiper-custom/swiper-custom.scss';

// eslint-disable-next-line import/no-unresolved
import 'swiper/scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/free-mode';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/pagination';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/thumbs';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/effect-coverflow';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/scrollbar';

interface SwiperCustomI {
  images?: Array<{ url: string }> | null;
}

export const SwiperCustom = ({ images }: SwiperCustomI): ReactElement => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  let showPagination = false;

  if (images) {
    if (images.length > 1) {
      showPagination = true;
    }
  }

  return (
    <div className="swiperCustom">
      <Swiper
        data-test-id="slide-big"
        loop
        thumbs={{ swiper: thumbsSwiper }}
        pagination
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        className="swiperCustom__swiperMain"
      >
        {images?.map((img, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <img
              className="swiperCustom__imgLg"
              src={getBookUrl(img) || bookDefaultLg}
              alt="img_book"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {showPagination && (
        <div className="swiperCustom__pagination">
          <Swiper
            data-test-id="slide-mini"
            onSwiper={setThumbsSwiper}
            loop
            spaceBetween={10}
            slidesPerView={5}
            freeMode
            scrollbar
            watchSlidesProgress
            modules={[FreeMode, Navigation, Scrollbar, Thumbs]}
            className="swiperCustom__mySwiper"
          >
            {images?.map((img, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                <img
                  className="swiperCustom__img"
                  src={getBookUrl(img) || bookDefaultLg}
                  alt="img_book"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <span className="swiperCustom__pagination_blur">{}</span>
          <span className="swiperCustom__pagination_blur">{}</span>
        </div>
      )}
    </div>
  );
};
