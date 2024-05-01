export const Rating = ({ rating }) => {
  //looping over arr to check condition if rating is true or not. For exampel a product has 3 stars the loop is responsible for converting arr start to true all the way til the start turn false again.
  // .fill() => fyller array med statisk värden. eg. arr = [1, 2, 3, 4]
  // arr.fill(0) => alla värden i arrayn blev 0
  let ratingArr = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArr[i] = true;
  }
  return (
    <>
      {ratingArr.map((value, index) => (
        <i
          key={index}
          className={
            value
              ? "text-lg bi bi-star-fill text-yellow-500 mr-1"
              : "text-lg bi bi-star text-yellow-500 mr-1"
          }
        ></i>
      ))}
    </>
  );
};
