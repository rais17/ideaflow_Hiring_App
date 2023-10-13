
const EmployeCard = ({imageurl, name, position, description}) => {
  return (
    <div className="flex w-11/12 flex-col space-y-4 px-4 py-8 shadow-2xl md:w-[calc(50%-32px)] at1080:w-[calc(33.333333%-32px)]">
      <div className="flex flex-row items-center gap-4 xxs:max-xs:flex-col xxs:max-xs:justify-center">
        <img className="w-24 h-24 aspect-square" src={imageurl} alt="" />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold text-white font-Red-Hat-Display xxs:max-xs:text-center">
            {name}
          </h1>
          <p className="text-sm font-normal text-white font-Red-Hat-Display">
            {position}
          </p>
        </div>
      </div>

      {description !== "" && (
        <div className="text-base font-normal text-white font-Red-Hat-Display xxs:max-xs:text-center">
          {description}
        </div>
      )}
    </div>
  );
}

export default EmployeCard

