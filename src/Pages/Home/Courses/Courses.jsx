

const Courses = ({course}) => {
    const {image, name, instructor, available_seats, price} = course;
    return (
        <>
<section>
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className=" overflow-hidden rounded-lg bg-white">
          <img
            src={image}
            alt="image"
            className="w-full h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
          />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href="javascript:void(0)"
                className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {name}
              </a>
            </h3>
            <p className="text-body-color mb-7 text-base font-semibold leading-relaxed">
                {instructor}
            </p>
            <div className="flex justify-end gap-24">
            <p className="text-body-color mb-7 text-base font-semibold leading-relaxed">
                Available Seats: {available_seats}
            </p>
            <p className="text-body-color mb-7 text-base font-semibold leading-relaxed">
                Price: ${price}
            </p>
            </div>
            <a
              href="javascript:void(0)"
              className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
            >
              Select The Course
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
};

export default Courses;