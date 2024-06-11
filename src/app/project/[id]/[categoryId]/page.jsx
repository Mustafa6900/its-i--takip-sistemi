'use client';

import { useParams } from 'next/navigation';

const CategoryDetailPage = () => {
  const {categoryId } = useParams();

  const categoryDetails = {
    1: { name: 'Temel İnşaat', description: 'Temel inşaat malzemeleri' },
    2: { name: 'İç Dekorasyon', description: 'İç dekorasyon malzemeleri' },
  };

  const category = categoryDetails[categoryId];

  if (!category) {
    return <div>Kategori bulunamadı.</div>;
  }

  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-8">{category.name}</h1>
      <p className="text-xl">{category.description}</p>
    </div>
  );
};

export default CategoryDetailPage;
