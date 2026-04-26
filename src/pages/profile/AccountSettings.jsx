import { useState, useEffect, useRef } from "react";
import { FaPencilAlt } from "react-icons/fa";

export default function AccountSettings() {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const fileRef = useRef();

  useEffect(() => {
    setName(storedUser.name || "");
    setEmail(storedUser.email || "");
    setPhone(storedUser.phone || "");
    setImage(storedUser.image || "");
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const save = () => {
    if (newPass && newPass !== confirmPass) {
      return alert("Passwords do not match");
    }

    const updatedUser = {
      ...storedUser,
      name,
      email,
      phone,
      image,
      password: newPass || storedUser.password,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile Updated");
    window.dispatchEvent(new Event("userLoggedIn"));
  };

  return (
    <div className="p-6">

      <h2 className="text-lg font-semibold mb-6">Account Settings</h2>


      <div className="flex items-center gap-6 mb-6">

        <div className="relative w-20 h-20">
          <img
            src={image || "https://via.placeholder.com/80"}
            className="w-20 h-20 rounded-full object-cover"
          />

          <button
            onClick={() => fileRef.current.click()}
            className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white"
          >
            <FaPencilAlt size={12} />
          </button>

          <input
            type="file"
            ref={fileRef}
            onChange={handleImage}
            className="hidden"
          />
        </div>

        <div>
          <h3 className="font-semibold">{name || "Full Name"}</h3>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 max-w-2xl">

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          className="border p-2 rounded"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 rounded"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="border p-2 rounded col-span-2"
        />
      </div>

      <h3 className="font-semibold mt-6 mb-2">Password Settings</h3>

      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        <input
          type="password"
          placeholder="New password"
          onChange={(e) => setNewPass(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPass(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={save}
        className="bg-blue-500 text-white px-6 py-2 mt-6 rounded"
      >
        Update
      </button>
    </div>
  );
}