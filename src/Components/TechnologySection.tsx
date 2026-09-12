import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

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

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // Add to Stack
  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove single item
  const removeFromStack = (id: string) => {
    const removedItem = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedItem) {
      toast.success(
        `${removedItem.name} removed from your stack!`
      );
    }
  };

  // Remove all
  const removeAll = () => {
    if (stack.length > 0) {
      setStack([]);
      toast.success(
        "All technologies removed from your stack!"
      );
    }
  };

  // Loading
  if (loading) {
    return (
      <section className="py-20 text-center">
        <span className="loading loading-spinner loading-lg"></span>

        <p className="mt-3 text-gray-500">
          Loading technologies...
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">

          {/* Technologies */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Explore the{" "}
                <span className="brand-gradient bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>

              <p className="mt-3 text-gray-500 text-sm md:text-base">
                Build your Ideal stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  addToStack={addToStack}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                />
              ))}
            </div>
          </div>

          {/* Your Stack */}
          <YourStack
            stack={stack}
            removeFromStack={removeFromStack}
            removeAll={removeAll}
          />

        </div>
      </div>
    </section>
  );
};

export default TechnologySection;