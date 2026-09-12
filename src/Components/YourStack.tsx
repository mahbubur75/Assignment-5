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

type YourStackProps = {
  stack: Technology[];
  removeFromStack: (id: string) => void;
  removeAll: () => void;
};

const YourStack = ({
  stack,
  removeFromStack,
  removeAll,
}: YourStackProps) => {
  return (
    <aside className="lg:sticky lg:top-24 h-fit">

      {/* Heading */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            Your Stack
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            {stack.length} Technology
            {stack.length !== 1 ? "s" : ""} Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={removeAll}
            className="text-xs text-orange-500 hover:text-orange-600"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="border border-gray-200 rounded-xl p-8 text-center min-h-57.5 flex flex-col items-center justify-center">

          <p className="text-sm font-medium text-gray-400">
            No technology Selected
          </p>

          <p className="text-xs text-gray-400 mt-2">
            Your stack is empty
          </p>

        </div>
      ) : (
        <>
          {/* Stack Items */}
          <div className="space-y-3">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 bg-white"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-700">
                    {item.name}
                  </h4>

                  <p className="text-xs text-gray-400">
                    {item.category}
                  </p>
                </div>

                <button
                  onClick={() => removeFromStack(item.id)}
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={removeAll}
            className="w-full mt-5 py-2 border border-orange-200 text-orange-500 rounded-lg text-sm hover:bg-orange-50 transition"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;