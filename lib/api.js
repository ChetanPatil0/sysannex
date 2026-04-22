

import axios from "axios";


export const sendJobApplication = async (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  const response = await axios.post("/api/job-application", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Send General Contact Form
export const sendContactForm = async (data) => {
  try {
    const response = await axios.post("/api/contact", data);
    return response.data;
  } catch (error) {
    console.error("Contact Form API Error:", error?.response?.data || error.message);
    throw error?.response?.data || { error: "Failed to send message. Please try again." };
  }
};