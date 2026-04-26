import { useState, useEffect } from "react";

export default function Addresses() {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null); // 🔥 for Change menu


  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("addresses"));
      setAddresses(Array.isArray(stored) ? stored : []);
    } catch {
      setAddresses([]);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const handleSave = () => {
    if (!input.trim()) return;

    if (editIndex !== null) {
      const updated = [...addresses];
      updated[editIndex] = input;
      setAddresses(updated);
      setEditIndex(null);
    } else {
      if (addresses.length >= 2) {
        alert("Only 2 addresses allowed");
        return;
      }
      setAddresses([...addresses, input]);
    }

    setInput("");
    setShowForm(false);
  };

  // DELETE
  const handleDelete = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
    setActiveIndex(null);
  };

  // EDIT
  const handleEdit = (index) => {
    setInput(addresses[index]);
    setEditIndex(index);
    setShowForm(true);
    setActiveIndex(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-6">Addresses</h2>

      {/* EMPTY */}
      {addresses.length === 0 && !showForm && (
        <div className="text-center text-gray-500 mt-20">
          <p>No Addresses found</p>
          <button
            onClick={() => setShowForm(true)}
            className="text-blue-500 underline mt-2"
          >
            Add Address
          </button>
        </div>
      )}

      {showForm && (
        <div className="max-w-md space-y-3 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border w-full px-3 py-2 rounded"
            placeholder="Enter address"
          />

          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editIndex !== null ? "Update Address" : "+ Add new Address"}
          </button>
        </div>
      )}

      {addresses.length > 0 && (
        <div className="space-y-4">

          {addresses.map((addr, i) => (
            <div
              key={i}
              className="border p-3 rounded flex justify-between items-center"
            >
              <span>{addr}</span>

              <div className="text-sm text-right">

                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === i ? null : i)
                  }
                  className="text-blue-500 underline"
                >
                  Change
                </button>

                {activeIndex === i && (
                  <div className="mt-2 flex gap-3 justify-end">
                    <button
                      onClick={() => handleEdit(i)}
                      className="text-blue-500 underline"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(i)}
                      className="text-red-500 underline"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {addresses.length < 2 && !showForm && (
            <button
              onClick={() => {
                setShowForm(true);
                setEditIndex(null);
                setInput("");
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              + Add new Address
            </button>
          )}
        </div>
      )}
    </div>
  );
}