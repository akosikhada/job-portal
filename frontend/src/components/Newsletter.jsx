import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div>
      {/* Main container for the newsletter subscription section */}
      <div>
        {/* Header for the subscription section with an icon */}
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText /> Subscribe to our newsletter
        </h3>
        {/* Description text for the subscription section */}
        <p className="text-primary/70 text-base mb-4">
          Get the latest job updates delivered straight to your inbox
        </p>
        <div className="w-full space-y-4">
          {/* Input field for users to enter their email address */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Provide your email"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          {/* Submit button for the subscription action */}
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
      {/* Separator for the early access section */}
      <div className="mt-20">
        {/* Header for the early access section with an icon */}
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get early access
        </h3>
        {/* Description text for the early access section */}
        <p className="text-primary/70 text-base mb-4">
          Get the latest job updates delivered straight to your inbox
        </p>
        <div className="w-full space-y-4">
          {/* Submit button for uploading a resume */}
          <input
            type="submit"
            value={"Upload Resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
