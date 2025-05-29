"use client"; // wajib kalau ada interaksi (state, form)

import { useState } from "react";

export default function AddMediaPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file_link: "",
    thumbnail: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await fetch("/api/media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("Data berhasil disimpan!");
        setFormData({ title: "", description: "", file_link: "", thumbnail: "" });
      } else {
        setMessage("Gagal menyimpan data.");
      }
    } catch (error) {
      setMessage("Terjadi kesalahan: " + error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray rounded-lg shadow-md mt-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Tambah Media</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block font-semibold mb-1">
            Judul Media <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="Masukkan judul media"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-semibold mb-1">
            Deskripsi
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Masukkan deskripsi media"
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* File Link */}
        <div>
          <label htmlFor="file_link" className="block font-semibold mb-1">
            Link File <span className="text-red-500">*</span>
          </label>
          <input
            id="file_link"
            name="file_link"
            type="url"
            required
            value={formData.file_link}
            onChange={handleChange}
            placeholder="Masukkan link file"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label htmlFor="thumbnail" className="block font-semibold mb-1">
            Link Thumbnail
          </label>
          <input
            id="thumbnail"
            name="thumbnail"
            type="url"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="Masukkan link thumbnail (opsional)"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-black font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Simpan Media
        </button>
      </form>

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
}
