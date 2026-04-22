
'use client';

import { useState, useCallback } from "react";
import { sendContactForm } from "@/lib/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CheckCircle, Mail, Phone, MapPin, Copy, Check, Send } from "lucide-react";
import { toast } from "react-toastify";


import countryCodesList from "country-codes-list";

const countryCodes = countryCodesList.all().map((c) => ({
  code: c.countryCallingCode,
  label: `+${c.countryCallingCode} ${c.countryNameEn
    .replace(/\(.*?\)/g, "")
    .trim()}`,
}));

const Field = ({ formik, name, placeholder, required, type = "input", rows }) => {
  const hasError = formik.touched[name] && formik.errors[name];
  const Tag = type === "textarea" ? "textarea" : "input";

  const baseClass =
    "w-full px-4 py-3 text-sm text-slate-800 bg-slate-50 border rounded-xl outline-none transition-all duration-150 placeholder:text-slate-400 font-[inherit]";

  const stateClass = hasError
    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100"
    : "border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white";

  return (
    <div className="flex flex-col gap-1">
      <Tag
        name={name}
        placeholder={required ? `${placeholder} *` : placeholder}
        value={formik.values[name]}
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

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState("");

  const handleCopy = useCallback(async (text, type) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 1500);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "91",
      company: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      countryCode: Yup.string().required("Country code is required"),
      phone: Yup.string()
        .required("Mobile number is required")
        .matches(/^\d{10}$/, "Phone must be exactly 10 digits"),
      company: Yup.string(),
      message: Yup.string(),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);

        const fullPhone = `+${values.countryCode}  ${values.phone}`;

        await sendContactForm({
          ...values,
          phone: fullPhone,
        });

        setIsLoading(false);
        resetForm();
        toast.success("Consultation request sent successfully!");
      } catch (error) {
        setIsLoading(false);
        toast.error("Something went wrong. Please try again!");
      }
    },
  });

  const phoneError = formik.touched.phone && formik.errors.phone;
  const countryError = formik.touched.countryCode && formik.errors.countryCode;

  return (
    <section id="contact" className="relative py-28 overflow-hidden">



      <div className="absolute top-[-80px] right-[-100px] w-[420px] h-[420px] rounded-full bg-blue-100 opacity-40 blur-[80px]" />
      <div className="absolute bottom-[-60px] left-[-80px] w-[320px] h-[320px] rounded-full bg-emerald-100 opacity-40 blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
            Let's Build <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">Something Great</span>
          </h2>
          <p className="text-slate-500 mt-3">
            Tell us about your project and we’ll reach out within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8 order-1 lg:order-2">

            <p className="text-sm text-slate-500 mb-6">
              Tell us about your project and we’ll reach out within 24 hours
            </p>

            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">

              <Field formik={formik} name="name" placeholder="Full Name" required />
              <Field formik={formik} name="email" placeholder="Email" required />

              <div className="flex gap-2">

                <select
                  name="countryCode"
                  value={formik.values.countryCode}
                  onChange={(e) =>
                    formik.setFieldValue("countryCode", e.target.value)
                  }
                  onBlur={formik.handleBlur}
                  className={`w-44 px-3 py-3 bg-slate-50 border rounded-xl text-sm outline-none ${
                    countryError ? "border-red-400 bg-red-50" : "border-slate-200"
                  }`}
                >
                  <option value="">Select Code</option>

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
                    if (val.length <= 10)
                      formik.setFieldValue("phone", val);
                  }}
                  onBlur={formik.handleBlur}
                  maxLength={10}
                  placeholder="10 digit mobile number"
                  className={`flex-1 px-4 py-3 bg-slate-50 border rounded-xl text-sm outline-none ${
                    phoneError ? "border-red-400 bg-red-50" : "border-slate-200"
                  }`}
                />
              </div>

              <Field formik={formik} name="company" placeholder="Company (Optional)" />
              <Field formik={formik} name="message" placeholder="Project Details" type="textarea" rows={4} />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl text-white font-semibold bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                {isLoading ? "Sending..." : "Request Consultation"}
              </button>

            </form>

          </div>

          <aside className="lg:col-span-2 flex flex-col gap-3.5 order-2 lg:order-1">

            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 min-w-[2.75rem] rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-slate-400 mb-1">Office</p>
                <p className="text-sm font-semibold text-slate-800">18, Gajanan Chowk, Vijay Nagar, Sinnar</p>
                <p className="text-xs text-slate-400 mt-0.5">Nashik Region – 422103, Maharashtra</p>
              </div>
            </div>

            <div
              onClick={() => handleCopy("info@sysannex.com", "email")}
              className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-4 cursor-pointer"
            >
              <div className="w-11 h-11 min-w-[2.75rem] rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Mail size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-slate-400 mb-1">Email</p>
                <p className="text-sm font-semibold text-slate-800">info@sysannex.com</p>
                <p className="text-xs text-slate-400 mt-0.5">We reply within 24 hours</p>
              </div>
              <button className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                {copied === "email" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>

            <div
              onClick={() => handleCopy("+919021173776", "phone")}
              className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-4 cursor-pointer"
            >
              <div className="w-11 h-11 min-w-[2.75rem] rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Phone size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                <p className="text-sm font-semibold text-slate-800">+91 90211 73776</p>
                <p className="text-xs text-slate-400 mt-0.5">Mon – Sat, 9 am – 7 pm</p>
              </div>
              <button className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                {copied === "phone" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-52">
              <iframe
                title="Office Location"
              src="https://maps.google.com/maps?q=Sinnar%2C%20Nashik%2C%20Maharashtra&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

          </aside>

        </div>
      </div>
    </section>
  );
}