import { Edit } from "lucide-react";
import Image from "next/image";

export default function EmployerProfile() {
  return (
    <div className="text-black w-full max-w-3xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 bg-blue-100 rounded-lg p-4 sm:p-6 shadow-md">
        {/* Profile Image */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-300">
          <Image
            src="/images/user.png"
            alt="Profile"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
              Robert Jane
            </h1>
            <button
              className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition"
              aria-label="Edit profile"
            >
              <Edit className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-semibold text-blue-800">
            Amazon
          </h2>

          <div className="space-y-2 text-base sm:text-lg">
            <p>
              <span className="font-semibold">Department:</span>{" "}
              Human Resource
            </p>
            <p>
              <span className="font-semibold">Contact No:</span>{" "}
              6380101407
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
