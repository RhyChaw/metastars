import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Volunteer Application Form</h2>
      <form className={styles.form}>
        {/* Name Field */}
        <div className={styles.formGroup}>
          <label>Name *</label>
          <div className={styles.nameFields}>
            <input type="text" placeholder="First" required className={styles.input} />
            <input type="text" placeholder="Last" required className={styles.input} />
          </div>
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label>Email *</label>
          <input type="email" required className={styles.input} />
        </div>

        {/* Experience with Volunteering */}
        <div className={styles.formGroup}>
          <label>Do you have any experience with volunteering? *</label>
          <div className={styles.radioGroup}>
            <input type="radio" name="experience" id="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="experience" id="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>

        {/* Availability */}
        <div className={styles.formGroup}>
          <label>My availabilities are *</label>
          <div className={styles.radioGroup}>
            <input type="radio" name="availability" id="weekday" />
            <label htmlFor="weekday">Weekday evenings</label>
            <input type="radio" name="availability" id="weekend" />
            <label htmlFor="weekend">Weekend</label>
            <input type="radio" name="availability" id="anytime" />
            <label htmlFor="anytime">Anytime or any day</label>
          </div>
        </div>

        {/* Preferred Volunteering Areas */}
        <div className={styles.formGroup}>
          <label>I prefer to volunteer in *</label>
          <div className={styles.checkboxGroup}>
            {[
              "Photography, Videography",
              "Web design and development",
              "Content Writing",
              "Graphic designs team",
              "Mentorship support",
              "Event Management & Support",
              "Decorations at Events",
              "Art, Craft, Face Painting, Henna, etc.",
              "Cultural, music and fine arts",
              "Fund raising",
              "Social Media Management",
              "Employment support",
            ].map((item, index) => (
              <div key={index} className={styles.checkboxItem}>
                <input type="checkbox" id={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Driving Ability */}
        <div className={styles.formGroup}>
          <label>Can you drive? *</label>
          <div className={styles.radioGroup}>
            <input type="radio" name="drive" id="driveYes" />
            <label htmlFor="driveYes">Yes</label>
            <input type="radio" name="drive" id="driveNo" />
            <label htmlFor="driveNo">No</label>
          </div>
        </div>

        {/* Location */}
        <div className={styles.formGroup}>
          <label>I live in *</label>
          <div className={styles.radioGroup}>
            {["Niagara Region", "Halton Region", "Peel Region", "GTA"].map(
              (region, index) => (
                <div key={index} className={styles.radioItem}>
                  <input type="radio" name="location" id={region} />
                  <label htmlFor={region}>{region}</label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div className={styles.formGroup}>
          <label>Phone Number *</label>
          <input type="tel" placeholder="+1 (123) 456-7890" required className={styles.input} />
        </div>

        {/* Physical Limitations */}
        <div className={styles.formGroup}>
          <label>Are there any physical limitations or accommodations needed?</label>
          <textarea rows="3" className={styles.input}></textarea>
        </div>

        {/* How did you hear about us? */}
        <div className={styles.formGroup}>
          <label>How did you hear about us?</label>
          <div className={styles.radioGroup}>
            {["Google", "Instagram", "Facebook"].map((source, index) => (
              <div key={index} className={styles.radioItem}>
                <input type="radio" name="hearAbout" id={source} />
                <label htmlFor={source}>{source}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className={styles.formGroup}>
          <label>Emergency Contact (Name & Number) *</label>
          <input type="text" required className={styles.input} />
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Form;
