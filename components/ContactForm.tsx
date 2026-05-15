'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, X } from 'lucide-react';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  description: string;
  organization: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  inquiryType: '',
  description: '',
  organization: '',
  message: '',
};

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required.';
  }

  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required.';
  }

  if (!form.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!form.inquiryType || form.inquiryType === 'Choose one option...') {
    errors.inquiryType = 'Please select an inquiry purpose.';
  }

  if (!form.description || form.description === 'Choose one option...') {
    errors.description = 'Please select a description that fits you.';
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="flex items-center gap-1.5 text-red-600 text-sm mt-1.5">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 rounded-lg border outline-none transition-colors bg-white text-gray-900 placeholder-gray-500 ${
    hasError
      ? 'border-red-500 focus:ring-2 focus:ring-red-300 focus:border-red-500'
      : 'border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow'
  }`;
}

function selectClass(hasError: boolean) {
  return `w-full px-4 py-3 rounded-lg border outline-none transition-colors bg-white text-gray-900 ${
    hasError
      ? 'border-red-500 focus:ring-2 focus:ring-red-300 focus:border-red-500'
      : 'border-gray-300 focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow'
  }`;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitErrorMsg, setSubmitErrorMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 4000);
    return () => clearTimeout(timer);
  }, [showToast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);

    // Re-validate the changed field if it's been touched
    if (touched[name as keyof FormState]) {
      const newErrors = validateForm(updatedForm);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormState] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormState] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched and run full validation
    const allTouched = Object.keys(initialForm).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {} as Record<keyof FormState, boolean>
    );
    setTouched(allTouched);

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus the first field with an error
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    setStatus('loading');
    setSubmitErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm(initialForm);
      setErrors({});
      setTouched({});
      setShowToast(true);
    } catch {
      setSubmitErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Have questions about our financial solutions? Get in touch with our team. We&apos;re here to help you find the right financing option for your needs.
          </p>
        </div>

        {/* Quick Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 pb-12 border-b border-gray-200">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-gray-900" />
            </div>
            <div>
              <a href="tel:+2347086429380" className="text-gray-900 font-medium hover:text-brand-yellow transition-colors">
                +234 708 642 9380
              </a>
              <p className="text-gray-600 text-sm">Available Mon-Fri, 9am-5pm</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-gray-900" />
            </div>
            <div>
              <a href="mailto:enquiries@swiftbanq.com.ng" className="text-gray-900 font-medium hover:text-brand-yellow transition-colors">
                enquiries@swiftbanq.com.ng
              </a>
              <p className="text-gray-600 text-sm">We respond within 24 hours</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-gray-900" />
            </div>
            <div>
              <p className="text-gray-900 font-medium">6, Babatunde Jose Street</p>
              <p className="text-gray-600 text-sm">Off Ademola Adetokunbo V.I, Lagos</p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Or fill out the form below</h2>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              {/* Success State */}
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-600 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-3 bg-brand-yellow text-brand-dark rounded-lg font-bold hover:bg-yellow-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Contact form">
                  {/* Submit Error Banner */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3" role="alert">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm">{submitErrorMsg}</p>
                    </div>
                  )}

                  {/* First Name and Last Name */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                        First Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="given-name"
                        aria-required="true"
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        className={inputClass(!!errors.firstName)}
                        placeholder="Enter your first name..."
                      />
                      <FieldError id="firstName-error" message={errors.firstName} />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                        Last Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="family-name"
                        aria-required="true"
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        className={inputClass(!!errors.lastName)}
                        placeholder="Enter your last name..."
                      />
                      <FieldError id="lastName-error" message={errors.lastName} />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={inputClass(!!errors.email)}
                        placeholder="Enter your email address..."
                      />
                      <FieldError id="email-error" message={errors.email} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={inputClass(!!errors.phone)}
                        placeholder="Enter your phone number..."
                      />
                      <FieldError id="phone-error" message={errors.phone} />
                    </div>
                  </div>

                  {/* Inquiry Purpose */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-900 mb-2">
                      Inquiry Purpose <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.inquiryType}
                      aria-describedby={errors.inquiryType ? 'inquiryType-error' : undefined}
                      className={selectClass(!!errors.inquiryType)}
                    >
                      <option value="">Choose one option...</option>
                      <option value="SME Financing">SME Financing</option>
                      <option value="Asset Financing">Asset Financing</option>
                      <option value="Digital Lending">Digital Lending</option>
                      <option value="Treasury Services">Treasury Services</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <FieldError id="inquiryType-error" message={errors.inquiryType} />
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
                      Description that fits you <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="description"
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? 'description-error' : undefined}
                      className={selectClass(!!errors.description)}
                    >
                      <option value="">Choose one option...</option>
                      <option value="Business Owner">Business Owner</option>
                      <option value="Entrepreneur">Entrepreneur</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Individual">Individual</option>
                    </select>
                    <FieldError id="description-error" message={errors.description} />
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-900 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="organization"
                      aria-invalid={!!errors.organization}
                      aria-describedby={errors.organization ? 'organization-error' : undefined}
                      className={inputClass(!!errors.organization)}
                      placeholder="Enter your organization..."
                    />
                    <FieldError id="organization-error" message={errors.organization} />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Message <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`resize-none ${inputClass(!!errors.message)}`}
                      placeholder="Tell us more about your inquiry..."
                    />
                    <FieldError id="message-error" message={errors.message} />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex justify-center items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Form
                        <Send className="w-5 h-5 ml-2" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gray-900 text-white px-5 py-4 rounded-xl shadow-lg animate-fade-in-up"
        >
          <CheckCircle className="w-5 h-5 text-green-400 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold text-sm">Message sent!</p>
            <p className="text-xs text-gray-300">We&apos;ll get back to you within 24 hours.</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            aria-label="Dismiss notification"
            className="ml-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
