import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const useProfileData = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const role = decodedToken?.claims?.role;
        const id = decodedToken?.claims?.id;

        let endpoint;
        if (role === "RECRUITMENT_MANAGER") {
          endpoint = `recruitment-manager/${id}`;
        } else if (role === "EMPLOYEE") {
          endpoint = `employee/${id}`;
        } else if (role === "ADMIN") {
          endpoint = `admin/${id}`;
        } else {
          throw new Error("Invalid role");
        }

        const response = await axios.get(endpoint);
        console.log(response.data); // Debugging: Log API response structure
        setProfileData(response.data.meta); // Ensure meta contains the expected data
        setLoading(false);
      } catch (err) {
        setError(err.message || "Error fetching profile data.");
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return { profileData, loading, error };
};
