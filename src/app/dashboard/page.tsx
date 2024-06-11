'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const projects = [
  { id: 1, name: 'Proje 1', color: 'bg-blue-500' },
  { id: 2, name: 'Proje 2', color: 'bg-green-500' },
  { id: 3, name: 'Proje 3', color: 'bg-red-500' },
  { id: 4, name: 'Proje 4', color: 'bg-yellow-500' },
  { id: 5, name: 'Proje 5', color: 'bg-indigo-500' },
  { id: 6, name: 'Proje 6', color: 'bg-purple-500' },
];

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectImage, setNewProjectImage] = useState('');

  const handleAddProject = () => {
    // Add project logic here
    setIsModalOpen(false);
  };

  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-8">Projeler</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 text-xl font-bold">
        {projects.map(project => (
        <Link key={project.id} href={`/project/${project.id}`} className={`w-64 h-64 hover:bg-teal-400 flex items-center justify-center ${project.color} rounded-3xl shadow-lg text-white transition-transform transform hover:scale-105  active:scale-95`}>
          {project.name}
       </Link>
        ))}
    <button
      onClick={() => setIsModalOpen(true)}
      className="w-64 h-64 p-6 bg-gray-500 rounded-3xl shadow-lg text-white flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-teal-400 active:scale-95"
    >
      <span className="animate-pulse">+ Proje Ekle</span>
    </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="bg-slate-50 p-8 rounded-lg shadow-lg m-6">
            <h2 className="text-xl font-bold mb-4">Yeni Proje Ekle</h2>
            <input
              type="text"
              placeholder="Proje Adı"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="Proje Resmi URL"
              value={newProjectImage}
              onChange={(e) => setNewProjectImage(e.target.value)}
              className="border p-2 mb-4 w-full"
              />
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                İptal
              </button>
              <button
                onClick={handleAddProject}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Ekle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
