import { CardCategory } from "./card";

export const ListCategories = () => {
  const categories = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((_, index) => (
        <CardCategory
          key={index}
          title="Conjuntos"
          slug="conjuntos"
          image="/category.webp"
        />
      ))}
    </div>
  );
};
