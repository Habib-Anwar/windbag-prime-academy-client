

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mt-12 text-center mb-4">
            <p className="text-emerald-700 uppercase font-semibold">꧁{subHeading}꧂</p>
            <h3 className="text-4xl uppercase mt-3 text-orange-500 font-semibold ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;