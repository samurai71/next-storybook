import PropTypes from 'prop-types';

const Card = ({ title, showSub, background, imgUrl, children }) => {
  return (
    <div class='flex justify-center'>
      <div
        class={`flex flex-col rounded-lg md:max-w-xl md:flex-row bg-${background} shadow-lg`}
      >
        <img
          class=' h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
          src={imgUrl}
        />
        <div class='flex flex-col justify-center p-6'>
          <h5 class='mb-2 text-xl font-medium text-gray-900 font-serif'>{title}</h5>
          {showSub && (
            <p class='mt-2 text-sm text-gray-500'>This is the card subtitle</p>
          )}
          <p class='mt-4 mb-4 text-base text-gray-700'>{children}</p>

          <button
            type='button'
            class='inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase text-white shadow-md'
          >
            Some action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string,
  showSub: PropTypes.bool,
  imgUrl: PropTypes.string,
  background: PropTypes.string,
};
