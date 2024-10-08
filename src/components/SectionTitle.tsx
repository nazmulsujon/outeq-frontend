interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="text-center my-4">
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
