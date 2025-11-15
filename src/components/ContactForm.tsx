import { RefObject, useRef, useState } from 'react';
import { Button } from './Button';

export function ContactForm() {
  const formRef: RefObject<HTMLFormElement | null> = useRef<HTMLFormElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
    window.setTimeout(() => setToast(null), 4500)
  }

  const validate = (data: Record<string, any>) => {
    if (!data.full_name || String(data.full_name).trim().length < 2) {
      return 'Please enter your full name.'
    }
    if (!data.email || !/^\S+@\S+\.\S+$/.test(String(data.email))) {
      return 'Please enter a valid email address.'
    }
    if (!data.phone_number || String(data.phone_number).replace(/[^0-9+]/g, '').length < 7) {
      return 'Please enter a valid phone number.'
    }
    if (!data.service_needed || String(data.service_needed).trim() === '') {
      return 'Please select a service needed.'
    }
    if (!data.business_name || String(data.business_name).trim().length < 2) {
      return 'Please enter your business name.'
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = formRef.current;
    if (!formElement) return;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries()) as Record<string, any>;

    const validationError = validate(data)
    if (validationError) {
      showToast(validationError, 'error')
      return
    }

    const payload = {
      full_name: String(data.full_name ?? ''),
      email: String(data.email ?? ''),
      phone_number: String(data.phone_number ?? ''),
      service_needed: String(data.service_needed ?? ''),
      business_name: String(data.business_name ?? ''),
      message: String(data.message ?? ''),
    }

    setIsSubmitting(true)
    try {
      const res = await fetch('https://api.marketmasterusa.com/api/v1/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const errText = await res.text()
        console.error('Submission error', res.status, errText)
        showToast('Submission failed. Please try again later.', 'error')
      } else {
        showToast('Thank you! We will contact you within 24 hours.', 'success')
        formElement.reset()
      }
    } catch (err) {
      console.error('Submission exception', err)
      showToast('Network error. Please check your connection and try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-text-primary mb-4">Get Started Today</h2>
            <p className="body-lg text-text-secondary">
              Fill out the form below and we&apos;ll contact you within 24 hours
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl bg-white border border-border">
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full_name" className="block body-sm font-medium text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block body-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone_number" className="block body-sm font-medium text-text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+1 (407) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="service_needed" className="block body-sm font-medium text-text-primary mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service_needed"
                    required
                    name="service_needed"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="virtualAddress">Virtual Address</option>
                    <option value="mailHandling">Mail Handling</option>
                    <option value="callAnswering">Call Answering</option>
                    <option value="meetingSupport">Meeting Room</option>
                    <option value="adminSupport">Admin Support</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              <div>
                  <label htmlFor="business_name" className="block body-sm font-medium text-text-primary mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business_name"
                    name="business_name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Acme Labs"
                  />
                </div>

              <div>
                <label htmlFor="message" className="block body-sm font-medium text-text-primary mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell us more about what you need..."
                  
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>

              <p className="body-sm text-text-secondary text-center">
                We respect your privacy and will never share your information
              </p>
            </form>
          </div>
        </div>
      </div>
      {toast && (
        <div className="fixed left-1/2 transform -translate-x-1/2 bottom-8 z-50">
          <div
            className={`px-4 py-3 rounded-lg shadow-lg text-white max-w-lg w-full mx-auto ${
              toast.type === 'success' ? 'bg-emerald-600' : 'bg-rose-600'
            }`}
            role="status"
          >
            {toast.message}
          </div>
        </div>
      )}
    </section>
  );
}