

'use client';

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Send, Upload, X } from "lucide-react";
import {  toast } from "react-toastify";


import countryCodesList from "country-codes-list";
import { sendJobApplication } from "../lib/api";

const countryCodes = countryCodesList.all().map((c) => ({
  code: c.countryCallingCode,
  label: `+${c.countryCallingCode} ${c.countryNameEn
    .replace(/\(.*?\)/g, "")
    .trim()}`,
}));

const Field = ({ formik, name, label, placeholder, required = true, type = "input", rows }) => {
  const hasError = formik.touched[name] && formik.errors[name];
  const Tag = type === "textarea" ? "textarea" : "input";

  const baseClass =
    "w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border rounded-xl outline-none transition-all duration-150 placeholder:text-slate-400";

  const stateClass = hasError
    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100"
    : "border-slate-200 focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 focus:bg-white";

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <Tag
        name={name}
        placeholder={placeholder}
        value={formik.values[name] || ''}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        rows={rows}
        className={`${baseClass} ${stateClass} ${type === "textarea" ? "resize-none leading-relaxed" : ""}`}
      />
      {hasError && (
        <p className="text-xs text-red-500 pl-1">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default function ApplicationModal({ open, onClose, jobTitle, position }) {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const FILE_SIZE_LIMIT = 5 * 1024 * 1024; // 5MB

  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      countryCode: "91",
      phone: "",
      relevantExp: "",
      currentLocation: "",
      resume: null,
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      countryCode: Yup.string().required("Country code is required"),
      phone: Yup.string()
        .required("Mobile number is required")
        .matches(/^\d{10}$/, "Phone must be exactly 10 digits"),
      relevantExp: Yup.string()
        .required("Relevant experience is required")
        .test('is-valid-exp', 'Please enter whole number or "Fresher"', function (value) {
          if (!value) return false;
          const lower = value.toLowerCase().trim();
          if (lower === 'fresher' || lower === 'freshers') return true;
          return /^\d+$/.test(value);
        }),
      currentLocation: Yup.string().required("Current location is required"),
      resume: Yup.mixed().required("Please upload your resume"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);

        const fullPhone = `+${values.countryCode} ${values.phone}`;   // +91 9566336696

        const fullName = `${values.firstName} ${values.middleName ? values.middleName + ' ' : ''}${values.lastName}`.trim();

       
        await sendJobApplication({ ...values, fullName, phone: fullPhone, position: position || jobTitle });

        setIsLoading(false);
        resetForm();
        setFileName('');
        onClose();
        toast.success("Application submitted successfully!");
      } catch (error) {
        setIsLoading(false);
        toast.error("Something went wrong. Please try again!");
      }
    },
  });

  const phoneError = formik.touched.phone && formik.errors.phone;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PDF, DOC, and DOCX files are allowed");
      return;
    }

    if (file.size > FILE_SIZE_LIMIT) {
      toast.error("File must be less than 5MB");
      return;
    }

    setFileName(file.name);
    formik.setFieldValue("resume", file);
  };

  const handleExpChange = (e) => {
    let value = e.target.value;
    if (!value.toLowerCase().includes('fresher')) {
      value = value.replace(/[^0-9]/g, '');
    }
    formik.setFieldValue("relevantExp", value);
  };

  const handleCancel = () => {
    formik.resetForm();
    setFileName('');
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">

        {/* Simple Title - No Background Color */}
      
<div className="px-8 mt-4 pb-4 flex items-start justify-between">
  
  <div>
    <h2 className="text-3xl font-bold text-slate-900 bg-gradient-to-r from-[var(--primary-blue)] to-[var(--green)] bg-clip-text text-transparent">
      Application Form
    </h2>

    <span className="text-lg text-slate-600 mt-1 block">
      Position : {jobTitle || position}
    </span>
  </div>

  {/* Close Button */}
  <button
    onClick={onClose}
    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition"
  >
    <X className="w-5 h-5 text-slate-600" />
  </button>

</div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-8 space-y-6">

          <form onSubmit={formik.handleSubmit} className="space-y-6">

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Field 
                formik={formik} 
                name="firstName" 
                label="First Name" 
                placeholder="John" 
              />
              <Field 
                formik={formik} 
                name="middleName" 
                label="Middle Name" 
                placeholder="Optional" 
                required={false} 
              />
              <Field 
                formik={formik} 
                name="lastName" 
                label="Last Name" 
                placeholder="Doe" 
              />
            </div>

            {/* Email */}
            <Field 
              formik={formik} 
              name="email" 
              label="Email Address" 
              placeholder="example@email.com" 
            />

            {/* Phone */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formik.values.countryCode}
                  onChange={(e) => formik.setFieldValue("countryCode", e.target.value)}
                  onBlur={formik.handleBlur}
                  className="w-52 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#2563eb]"
                >
                  {countryCodes.map((c, index) => (
                    <option key={index} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  name="phone"
                  value={formik.values.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    if (val.length <= 10) formik.setFieldValue("phone", val);
                  }}
                  onBlur={formik.handleBlur}
                  maxLength={10}
                   placeholder="10 digit mobile number"
                  className={`flex-1 px-4 py-3 bg-slate-50 border rounded-xl text-sm outline-none ${
                    phoneError ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-[#2563eb]"
                  }`}
                />
              </div>
              {phoneError && (
                <p className="text-xs text-red-500 pl-1">{formik.errors.phone}</p>
              )}
            </div>

            {/* Relevant Experience */}
            <Field 
              formik={formik} 
              name="relevantExp" 
              label="Relevant Experience (in years)" 
              placeholder="Enter years or type Fresher" 
              onChange={handleExpChange}
            />

            {/* Current Location */}
            <Field 
              formik={formik} 
              name="currentLocation" 
              label="Current Location" 
              placeholder="e.g. Nashik, Maharashtra" 
            />

            {/* Resume Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Upload Resume <span className="text-red-500">*</span>
              </label>
              <div className="border border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-[#2563eb] transition-all">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resumeUpload"
                />
                <label
                  htmlFor="resumeUpload"
                  className="cursor-pointer flex flex-col items-center gap-3"
                >
                  <Upload className="w-9 h-9 text-slate-400" />
                  <div>
                    <span className="text-slate-700 font-medium block">
                      {fileName ? fileName : "Click to upload your resume"}
                    </span>
                    {!fileName && (
                      <p className="text-xs text-slate-400 mt-1">
                        PDF, DOC, DOCX (Maximum 5MB)
                      </p>
                    )}
                  </div>
                </label>
              </div>
              {formik.touched.resume && formik.errors.resume && (
                <p className="text-xs text-red-500 pl-1">{formik.errors.resume}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 py-3.5 border border-slate-300 text-slate-700 font-medium rounded-2xl hover:bg-slate-50 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-3.5 bg-[#2563eb] hover:bg-[#1e40af] text-white font-semibold rounded-2xl flex items-center justify-center gap-3 transition disabled:opacity-70"
              >
                {isLoading ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send size={20} />
                    Submit Application
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>

     
    </div>
  );
}