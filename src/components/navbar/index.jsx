const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border border-white shadow-lg bg-black/30 backdrop-blur-md rounded-b-2xl">
      <div className="text-2xl font-bold text-white">Quea</div>
      <div className="w-full max-w-xs">
        <input
          type="text"
          placeholder="Find Twixtor"
          className="w-full px-4 py-2 text-center text-black placeholder-gray-500 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
