type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechnologyCardProps = {
  technology: Technology;
  addToStack: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({
  technology,
  addToStack,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition duration-300">

      {/* Top */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10 object-contain"
        />

        <span className="text-xs font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-bold text-gray-800">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-500 leading-6 min-h-18">
        {technology.description}
      </p>

      {/* Info */}
      <div className="flex items-center justify-between mt-4 text-xs">
        <span className="text-gray-500">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

        <span className="text-yellow-500 font-medium">
          ★ {technology.rating}
        </span>
      </div>

  {/* Button */}
<button
  onClick={() => addToStack(technology)}
  className={`w-full mt-5 py-2.5 rounded-lg text-sm font-medium transition ${
    isAdded
      ? "bg-gray-200 text-gray-500 hover:bg-gray-300"
      : "bg-[#142033] text-white hover:bg-gray-800"
  }`}
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>
    </div>
  );
};

export default TechnologyCard;