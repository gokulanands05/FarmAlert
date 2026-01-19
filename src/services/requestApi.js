import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

// 🔹 Admin: Fetch all storage requests
export const fetchAllRequests = async (token) => {
  const res = await axios.get(
    `${API_BASE}/api/storage-requests`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data; // MUST be array
};

// 🔹 Admin: Update request status
export const updateRequestStatus = async (id, status, token) => {
  const res = await axios.patch(
    `${API_BASE}/api/storage-requests/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

// 🔹 USER: Submit storage request
export const submitStorageRequest = async (data) => {
  const res = await axios.post(
    `${API_BASE}/api/requests`,
    data
  );
  return res.data;
};
