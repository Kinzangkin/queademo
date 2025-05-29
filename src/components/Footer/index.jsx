const Footer = () => {
  return (
    <footer className="py-5 mt-12 text-gray-300 border border-white bg-gray-950">
      <div className="flex flex-col items-center justify-between px-6 mx-auto max-w-7xl md:flex-row">
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <h2 className="text-xl font-semibold text-white">Quea</h2>
          <p className="mt-1 text-sm">
            copyright © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="https://ko-fi.com/kinzz/goal?g=0">donation</a>
          <a href="#" className="transition hover:text-white">Contact</a>
          <a href="#" className="transition hover:text-white">Privacy Policy</a>
          <link rel="stylesheet" href="#" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
