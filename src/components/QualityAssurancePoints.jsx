const QualityAssurancePoints = ({ title, desc, className }) => {
  return (
    <div className={className}>
      <h4 className={"text-[#525252] text-[1.42rem] font-[700]"}>{title}</h4>
      <div>
        <p className="text-[0.99375rem] text-[#7a7b78] mb-[1rem]">{desc}</p>
      </div>
    </div>
  );
};

export { QualityAssurancePoints };
