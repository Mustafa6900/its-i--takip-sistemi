'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ProjectPage = ({ params }) => {
  const { id } = params;
  const [categories, setCategories] = useState([
    { id: 1, name: 'Temel İnşaat', color: 'bg-red-500', description: 'Temel inşaat malzemeleri' },
    { id: 2, name: 'İç Dekorasyon', color: 'bg-blue-500', description: 'İç dekorasyon malzemeleri' },
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([
        ...categories,
        { id: categories.length + 1, name: newCategory, color: 'bg-green-500', description: 'Yeni kategori açıklaması' },
      ]);
      setNewCategory('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-8">İnşaat Kalemleri</h1>
      <div className="grid grid-cols-3 gap-8 text-xl font-bold">
        {categories.map((category) => (
          <Link key={category.id} href={`/project/${id}/${category.id}`}>
            <div
              className={`h-32 flex items-center justify-center ${category.color} rounded-lg shadow-lg hover:bg-teal-400 text-white transition-transform transform hover:scale-105 active:scale-95 cursor-pointer`}
            >
              {category.name}
            </div>
          </Link>
        ))}
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-32 p-6 bg-gray-500 rounded-lg shadow-lg text-white flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-teal-400 active:scale-95"
        >
          <span className="animate-pulse">+ Kategori Ekle</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <h2 className="text-lg font-bold mb-4">Yeni Kategori Ekle</h2>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border p-2 mb-4 w-full"
              placeholder="Kategori adı"
            />
            <button
              onClick={addCategory}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Ekle
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-500 text-white p-2 rounded ml-2"
            >
              İptal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
