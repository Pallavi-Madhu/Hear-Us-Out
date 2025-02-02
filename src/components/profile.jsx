import { useState } from "react";


const Profile = () => {
  const [image, setImage] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
    setShowOptions(false); // Hide options after selecting an image
  };

  return (
    <div className="flex flex-col items-center gap-3 fixed top-4 right-4">
      {/* Profile Image */}
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="cursor-pointer"
      >
        <img
          src={image||"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
        />
      </div>

      {/* Options Menu */}
      {showOptions && (
        <div className="absolute top-25 bg-white shadow-md p-2 rounded-lg flex flex-col gap-1">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            View
          </button>
          <label className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer">
            Change
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      )}

      {/* Image Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg flex flex-col items-center">
            <img
              src={image}
              alt="Profile Enlarged"
              className="w-64 h-64 rounded-full object-cover"
            />
            <button
              onClick={() => setShowModal(false)}
              className="mt-3 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;