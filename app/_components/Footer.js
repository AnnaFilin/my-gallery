const Footer = () => {
  return (
    <footer className="bg-primary-800 text-primary-50 py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} Anna Filin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
