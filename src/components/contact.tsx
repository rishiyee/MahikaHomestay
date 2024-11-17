import React, { useState } from "react";
import mail from "../assets/Mail outline.svg";
import phone from "../assets/Phone.svg";
import address from "../assets/Location city.svg";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  updates: boolean;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface TextFieldProps {
  label?: string;
  description?: string;
  varient?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name?: string;
  error?: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    updates: false,
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value, type } = target;

    let updatedValue: string | boolean = value;
    if (type === "checkbox") {
      updatedValue = (target as HTMLInputElement).checked;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    };

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).every(
      (key) => newErrors[key as keyof FormErrors] === ""
    );
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const whatsappMessage = `
      Hello! I would like to reach out:
      - Name: ${formData.firstName} ${formData.lastName}
      - Email: ${formData.email}
      - Phone: ${formData.phoneNumber}
      - Message: ${formData.message}
      - Updates: ${formData.updates ? "Yes" : "No"}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "918281933492";
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="sm:py-24 flex sm:flex-row sm375:flex-col sm375:py-14 sm375:px-4">
      <div className="sm:px-32 flex flex-col sm:gap-24 flex-1 sm375:gap-11">
        <div>
          <p className="text-fade font-dmSans font-normal text-base">
            CONTACT US
          </p>
          <h4 className="text-baseText font-dmSans font-normal sm:text-4xl sm375:text-2xl">
            Reach out to Hygge Royal
          </h4>
          <p className="text-fade sm:text-xl font-dmSans font-normal sm375:text-base">
            We’re here for you! Whether you have questions about Mahika
            Homestay, need assistance with your booking, or want to learn more
            about the experiences we offer, don’t hesitate to reach out.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="px-6 py-3 flex gap-3 items-center">
            <div>
              <img src={mail} alt="Email Icon" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-dmSans text-baseText font-normal">
                Gmail
              </span>
              <span className="text-base text-baseText font-dmSans font-normal">
                hello@mahimakahomestay.com
              </span>
            </div>
          </div>
          <div className="px-6 py-3 flex gap-3 items-center">
            <div>
              <img src={phone} alt="Phone Icon" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-dmSans text-baseText font-normal">
                Phone
              </span>
              <span className="text-base text-baseText font-dmSans font-normal">
                +91 8547838091
              </span>
            </div>
          </div>
          <div className="px-6 py-3 flex gap-3 items-center">
            <div>
              <img src={address} alt="Address Icon" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-dmSans text-baseText font-normal">
                Address
              </span>
              <span className="text-base text-baseText font-dmSans font-normal">
                Mahika Homestay, Eranelloor, Panamaram PO, Wayand, Kerala
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-32 flex-1">
        <div className="sm:p-14 border flex flex-col sm:gap-8 rounded-2xl sm375:py-14 sm375:px-4 sm375:gap-4">
          <h2 className="text-baseText font-dmSans font-normal text-xl">
            Submit the form, and our team will get in touch with you shortly.
          </h2>
          <div>
            <div className="flex gap-2.5">
              <TextField
                label="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                name="firstName"
                error={errors.firstName}
              />
              <TextField
                label="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                name="lastName"
                error={errors.lastName}
              />
            </div>
            <TextField
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              name="email"
              error={errors.email}
            />
            <TextField
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              name="phoneNumber"
              error={errors.phoneNumber}
            />
            <TextField
              label="How can we help?"
              varient="big"
              value={formData.message}
              onChange={handleInputChange}
              name="message"
              error={errors.message}
            />
            <div className="flex gap-2.5 justify-center pt-2">
              <div className="pt-1">
                <input
                  type="checkbox"
                  className="accent-primary"
                  name="updates"
                  checked={formData.updates}
                  onChange={handleInputChange}
                />
              </div>
              <p className="text-fade font-dmSans font-normal text-base">
                Yes, I’d like to receive occasional updates and insights on
                enhancing my experience at Mahika Homestay.
              </p>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="px-1 py-2.5 bg-primary w-full rounded-full text-solid font-dmSans"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export const TextField = ({
  label,
  varient,
  value,
  onChange,
  name,
  error,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-fade font-dmSans font-normal text-xs"
      >
        {label}
      </label>
      <input
        type="text"
        className={`w-full border px-5 py-2.5 rounded ${
          varient === "big" ? "h-16" : ""
        }`}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
