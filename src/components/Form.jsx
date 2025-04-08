import React, { useState } from "react";
import styles from "../compStyling/Form.module.css"; // Adjust the path as necessary
import supabase from "../supabaseClient"; // Import Supabase client

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
    availability: "",
    preferredAreas: [],
    canDrive: "",
    location: "",
    phoneNumber: "",
    physicalLimitations: "",
    hearAbout: "",
    otherHearAbout: "", // New field for "Other" in "How did you hear about us?"
    emergencyContactName: "", // Split into name and number
    emergencyContactNumber: "", // Separate phone number field for emergency contact
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        preferredAreas: checked
          ? [...prevData.preferredAreas, value]
          : prevData.preferredAreas.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled before submitting
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "experience",
      "availability",
      "canDrive",
      "location",
      "phoneNumber",
      "emergencyContactName",
      "emergencyContactNumber",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill out the ${field} field.`);
        return;
      }
    }

    const { error } = await supabase.from("volunteers").insert([formData]);

    if (error) {
      console.error("Error submitting form:", error.message);
    } else {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        experience: "",
        availability: "",
        preferredAreas: [],
        canDrive: "",
        location: "",
        phoneNumber: "",
        physicalLimitations: "",
        hearAbout: "",
        otherHearAbout: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mw}>
        <h2 className={styles.formTitle}>Volunteer Application Form</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name */}
          <div className={styles.formGroup}>
            <label>Name *</label>
            <div className={styles.nameFields}>
              <input
                type="text"
                name="firstName"
                placeholder="First"
                required
                className={styles.input}
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                required
                className={styles.input}
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              required
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Experience */}
          <div className={styles.formGroup}>
            <label>Do you have any experience with volunteering? *</label>
            <div className={styles.radioItem}>
              <input
                type="radio"
                name="experience"
                value="Yes"
                onChange={handleChange}
                required
              />
              <label>Yes</label>
            </div>
            <div className={styles.radioItem}>
              <input
                type="radio"
                name="experience"
                value="No"
                onChange={handleChange}
                required
              />
              <label>No</label>
            </div>
          </div>

          {/* Availability */}
          <div className={styles.formGroup}>
            <label>My availabilities are *</label>
            {["Weekday evenings", "Weekend", "Anytime or any day"].map((item, index) => (
              <div key={index} className={styles.radioItem}>
                <input
                  type="radio"
                  name="availability"
                  value={item}
                  onChange={handleChange}
                  required
                />
                <label>{item}</label>
              </div>
            ))}
          </div>

          {/* Preferred Areas */}
          <div className={styles.formGroup}>
            <label>I prefer to volunteer in *</label>
            <div className={styles.checkboxGroup}>
              {[
                "Photography, Videography",
                "Web design and development",
                "Content Writing",
                "Graphic design",
                "Mentorship support",
                "Event Management & Support",
                "Decorations at Events",
                "Cultural, music and fine arts",
                "Fund raising",
                "Social Media Management",
                "Employment support",
              ].map((item, index) => (
                <div key={index} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    name="preferredAreas"
                    value={item}
                    onChange={handleChange}
                  />
                  <label>{item}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Can Drive */}
          <div className={styles.formGroup}>
            <label>Can you drive? *</label>
            <div className={styles.radioItem}>
              <input
                type="radio"
                name="canDrive"
                value="Yes"
                onChange={handleChange}
                required
              />
              <label>Yes</label>
            </div>
            <div className={styles.radioItem}>
              <input
                type="radio"
                name="canDrive"
                value="No"
                onChange={handleChange}
                required
              />
              <label>No</label>
            </div>
          </div>

          {/* Location */}
          <div className={styles.formGroup}>
            <label>I live in *</label>
            {["Niagara Region", "Halton Region", "Peel Region", "GTA", "KWC"].map((region, index) => (
              <div key={index} className={styles.radioItem}>
                <input
                  type="radio"
                  name="location"
                  value={region}
                  onChange={handleChange}
                  required
                />
                <label>{region}</label>
              </div>
            ))}
          </div>

          {/* Phone Number */}
          <div className={styles.formGroup}>
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="+1 (123) 456-7890"
              required
              className={styles.input}
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          {/* Physical Limitations */}
          <div className={styles.formGroup}>
            <label>Are there any physical limitations or accommodations needed?</label>
            <textarea
              name="physicalLimitations"
              rows="3"
              className={styles.input}
              value={formData.physicalLimitations}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* How did you hear about us? */}
          <div className={styles.formGroup}>
            <label>How did you hear about us?</label>
            {["Google", "Instagram", "Facebook"].map((source, index) => (
              <div key={index} className={styles.radioItem}>
                <input
                  type="radio"
                  name="hearAbout"
                  value={source}
                  onChange={handleChange}
                />
                <label>{source}</label>
              </div>
            ))}
            <div className={styles.radioItem}>
              <input
                type="radio"
                name="hearAbout"
                value="Other"
                onChange={handleChange}
              />
              <label>Other (Please specify)</label>
              {formData.hearAbout === "Other" && (
                <input
                  type="text"
                  name="otherHearAbout"
                  placeholder="Specify here"
                  className={styles.input}
                  value={formData.otherHearAbout}
                  onChange={handleChange}
                  style={{ width: "200px" }}
                />
              )}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className={styles.formGroup}>
            <label>Emergency Contact Name *</label>
            <input
              type="text"
              name="emergencyContactName"
              required
              className={styles.input}
              value={formData.emergencyContactName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Emergency Contact Number *</label>
            <input
              type="tel"
              name="emergencyContactNumber"
              required
              className={styles.input}
              value={formData.emergencyContactNumber}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
