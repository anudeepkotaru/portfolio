import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FormSubmit API endpoint with secure token
    const formEndpoint = "https://formsubmit.co/satyaanudeepk@gmail.com";

    // Create Form Data
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    fetch(formEndpoint, {
      method: "POST",
      body: formDataToSend,
    })
      .then((res) => {
        if (res.ok) {
          alert("Mail sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        } else {
          alert("Failed to send mail. Please try again.");
        }
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section className="py-20 bg-yellow-500 dark:bg-yellow-600" id="contact">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-semibold text-white dark:text-gray-900 text-center">
          Get in Touch
        </h3>
        <p className="mt-4 text-lg text-white dark:text-gray-800 text-center">
          I am available for internships, freelance projects, or full-time
          opportunities. Feel free to reach out!
        </p>

        <div className="row flex justify-center mt-8">
          <form onSubmit={handleSubmit} className="contact-form w-full max-w-2xl bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <div className="row flex flex-wrap -mx-3">
              {/* Name Input */}
              <div className="form-item w-full md:w-1/2 px-3 mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="form-item w-full md:w-1/2 px-3 mb-4">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Subject Input */}
            <div className="row">
              <div className="form-item w-full px-3 mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="row">
              <div className="form-item w-full px-3 mb-4">
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows="4"
                    className="form-control w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Send Button */}
            <div className="row">
              <div className="form-item w-full px-3">
                <button
                  type="submit"
                  className="btn w-full bg-yellow-500 text-white dark:bg-yellow-400 dark:text-gray-900 py-3 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-yellow-600 dark:hover:bg-yellow-500"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
