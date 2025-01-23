import React from "react";

const Header = ({ title, path }) => {
  return (
    <div className="py-24 mt-3 bg-[#fafafa] rounded flex items-center justify-center">
      <div>
        <h2 className="text-3xl text-blue font-bold mb-1 text-center">
          {title}
        </h2>
        <p className="text-sm text-center font-medium">
          <a className="hover:underline" href="/">
            Home
          </a>
          / {path}
        </p>
      </div>
    </div>
  );
};

export default Header;
