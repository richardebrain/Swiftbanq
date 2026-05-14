'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  inquiryType: 'SME Financing',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm(initialForm);
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <div className="w-full bg-transparent pb-24">
      {/* Header */}
      <div className="py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are here to answer your questions and guide you toward the right financial solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need SME Financing, Asset Financing, or want to explore our Treasury
                Services, our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Office Location</h3>
                  <address className="text-gray-600 not-italic">
                    6, Babatunde Jose Street, Off Ademola Adetokunbo V.I, Lagos.
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Phone className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                  <a href="tel:+2347086429380" className="text-gray-600 hover:text-brand-dark transition-colors">
                    07086429380
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Mail className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Address</h3>
                  <a href="mailto:enquiries@swiftbanq.com.ng" className="text-gray-600 hover:text-brand-dark transition-colors">
                    enquiries@swiftbanq.com.ng
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-3xl p-8 md:p-12 border border-gray-800 shadow-xl shadow-black/50">

              {/* Success State */}
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-3 bg-brand-yellow text-brand-dark rounded-lg font-bold hover:bg-brand-yellow-hover transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>

                  {/* Error Banner */}
                  {status === 'error' && (
                    <div className="mb-6 flex items-start gap-3 bg-red-900/40 border border-red-500 text-red-300 rounded-lg px-4 py-3" role="alert">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Contact form">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                          First Name <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          autoComplete="given-name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors bg-gray-900 text-white placeholder-gray-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                          Last Name <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          autoComplete="family-name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors bg-gray-900 text-white placeholder-gray-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors bg-gray-900 text-white placeholder-gray-500"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors bg-gray-900 text-white placeholder-gray-500"
                          placeholder="+234 XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={form.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors bg-gray-900 text-white"
                      >
                        <option>SME Financing</option>
                        <option>Asset Financing</option>
                        <option>Digital Lending</option>
                        <option>Treasury Services</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Message <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow outline-none transition-colors bg-gray-900 text-white placeholder-gray-500"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex justify-center items-center px-8 py-4 bg-brand-yellow text-brand-dark rounded-lg font-bold hover:bg-brand-yellow-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Submit Application / Inquiry
                          <Send className="w-5 h-5 ml-2" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
