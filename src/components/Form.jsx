import React, { useState } from "react";
import styles from "./Form.module.css";
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
    emergencyContact: "",
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
        emergencyContact: "",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Volunteer Application Form</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Name *</label>
          <div className={styles.nameFields}>
            <input type="text" name="firstName" placeholder="First" required className={styles.input} value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last" required className={styles.input} value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Email *</label>
          <input type="email" name="email" required className={styles.input} value={formData.email} onChange={handleChange} />
        </div>

        <div className={styles.formGroup}>
          <label>Do you have any experience with volunteering? *</label>
          <div className={styles.radioGroup}>
            <input type="radio" name="experience" value="Yes" onChange={handleChange} />
            <label>Yes</label>
            <input type="radio" name="experience" value="No" onChange={handleChange} />
            <label>No</label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>My availabilities are *</label>
          {["Weekday evenings", "Weekend", "Anytime or any day"].map((item, index) => (
            <div key={index} className={styles.radioItem}>
              <input type="radio" name="availability" value={item} onChange={handleChange} />
              <label>{item}</label>
            </div>
          ))}
        </div>

        <div className={styles.formGroup}>
          <label>I prefer to volunteer in *</label>
          <div className={styles.checkboxGroup}>
            {["Photography, Videography", "Web design and development", "Content Writing", "Graphic design", "Mentorship support", "Event Management & Support", "Decorations at Events", "Art, Craft, Face Painting, Henna, etc.", "Cultural, music and fine arts", "Fund raising", "Social Media Management", "Employment support"].map((item, index) => (
              <div key={index} className={styles.checkboxItem}>
                <input type="checkbox" name="preferredAreas" value={item} onChange={handleChange} />
                <label>{item}</label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Can you drive? *</label>
          <div className={styles.radioGroup}>
            <input type="radio" name="canDrive" value="Yes" onChange={handleChange} />
            <label>Yes</label>
            <input type="radio" name="canDrive" value="No" onChange={handleChange} />
            <label>No</label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>I live in *</label>
          {["Niagara Region", "Halton Region", "Peel Region", "GTA"].map((region, index) => (
            <div key={index} className={styles.radioItem}>
              <input type="radio" name="location" value={region} onChange={handleChange} />
              <label>{region}</label>
            </div>
          ))}
        </div>

        <div className={styles.formGroup}>
          <label>Phone Number *</label>
          <input type="tel" name="phoneNumber" placeholder="+1 (123) 456-7890" required className={styles.input} value={formData.phoneNumber} onChange={handleChange} />
        </div>

        <div className={styles.formGroup}>
          <label>Are there any physical limitations or accommodations needed?</label>
          <textarea name="physicalLimitations" rows="3" className={styles.input} value={formData.physicalLimitations} onChange={handleChange}></textarea>
        </div>

        <div className={styles.formGroup}>
          <label>How did you hear about us?</label>
          {["Google", "Instagram", "Facebook"].map((source, index) => (
            <div key={index} className={styles.radioItem}>
              <input type="radio" name="hearAbout" value={source} onChange={handleChange} />
              <label>{source}</label>
            </div>
          ))}
        </div>

        <div className={styles.formGroup}>
          <label>Emergency Contact (Name & Number) *</label>
          <input type="text" name="emergencyContact" required className={styles.input} value={formData.emergencyContact} onChange={handleChange} />
        </div>

        <button type="submit" className={styles.submitButton}>Submit Application</button>
      </form>
    </div>
  );
};

export default Form;
