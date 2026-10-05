import React, { useState } from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaUniversity, 
  FaUser, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaGraduationCap, 
  FaMapPin 
} from 'react-icons/fa';

export default function ContactEnquirySection() {
  // Simple state for form inputs
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    otp: '',
    selectedClass: '',
    selectedState: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enquiry Submitted Successfully!');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-4 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80')` }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Container Card */}
      <div className="relative z-10 max-w-6xl w-full bg-[#f4fbf7] rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Box: Contact Us */}
        <div className="bg-[#123524] text-white p-8 md:p-12 flex flex-col justify-between">
          <div>
            {/* Logo / Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-3 rounded-full text-[#123524]">
                <FaUniversity size={24} />
              </div>
              <span className="text-xl font-bold tracking-wider">TULAS INTERNATIONAL</span>
            </div>

            <h2 className="text-3xl font-bold mb-6 border-b border-emerald-800 pb-3">Contact Us</h2>

            {/* Contact Details List */}
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start space-x-3">
                <FaPhoneAlt className="mt-1 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold block">Admission Helpline No.:</span>
                  <a href="tel:+919837983791" className="hover:underline text-emerald-200">+91-98379 83791</a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <FaEnvelope className="mt-1 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold block">Email:</span>
                  <a href="mailto:info@tis.edu.in" className="hover:underline text-emerald-200">info@tis.edu.in</a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold block">Full School Address:</span>
                  <p className="text-emerald-200">Tulas International School Dhoolkot, P.O.-Selaqui, Chakrata Road, Dehradun-248011</p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <FaPhoneAlt className="mt-1 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold block">Landline Numbers:</span>
                  <p className="text-emerald-200">0135-2699444, 0135-2699666</p>
                </div>
              </li>
            </ul>
          </div>

          {/* School Logo / Branding at Bottom */}
          <div className="mt-8 pt-6 border-t border-emerald-800/60 flex items-center justify-between">
            <span className="text-xs tracking-widest uppercase text-emerald-300">Official Campus Portal</span>
            <div className="font-extrabold tracking-wider text-lg text-emerald-100">T.I.S.</div>
          </div>
        </div>

        {/* Right Box: Enquiry Now! */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-white/95">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Enquiry Now!</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><FaUser /></span>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  placeholder="Enter your full name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><FaEnvelope /></span>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            {/* Mobile Number & Send OTP */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Mobile Number</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><FaMobileAlt /></span>
                  <input 
                    type="tel" 
                    name="mobile"
                    required
                    placeholder="+91 Mobile Number" 
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <button type="button" className="bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-800 transition">
                  Send OTP
                </button>
              </div>
            </div>

            {/* OTP Field & Verify */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Enter OTP</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><FaShieldAlt /></span>
                  <input 
                    type="text" 
                    name="otp"
                    placeholder="Enter 4-digit OTP" 
                    value={formData.otp}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <button type="button" className="bg-gray-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-black transition">
                  Verify OTP
                </button>
              </div>
            </div>

            {/* Dropdowns Row (Class & State) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Select Class</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><FaGraduationCap /></span>
                  <select 
                    name="selectedClass"
                    value={formData.selectedClass}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="">Select Class</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 11">Grade 11</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Select State</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><FaMapPin /></span>
                  <select 
                    name="selectedState"
                    value={formData.selectedState}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="">Select State</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2 pt-2">
              <input 
                type="checkbox" 
                name="agreed"
                id="agreed"
                required
                checked={formData.agreed}
                onChange={handleChange}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <label htmlFor="agreed" className="text-xs text-gray-600">
                I agree to receive information/updates via WhatsApp/SMS/Email.
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#123524] text-white font-semibold py-3 rounded-lg hover:bg-emerald-900 transition shadow-md mt-4"
            >
              Enquire Now
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}