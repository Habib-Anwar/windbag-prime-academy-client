

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <p className="text-emerald-700">꧁{subHeading}꧂</p>
            <h3 className="text-3xl">{heading}</h3>
        </div>
    );
};

export default SectionTitle;