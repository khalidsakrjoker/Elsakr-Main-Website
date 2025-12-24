
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../../lib/useContent';
import { Button } from './Button';
import { CheckCircle, ChevronLeft, ChevronRight, Send, Smartphone } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    currency: 'USD',
    details: '',
    timeline: ''
  });
  
  const { content, language } = useContent();
  const NextIcon = language === 'ar' ? ChevronLeft : ChevronRight;
  const BackIcon = language === 'ar' ? ChevronRight : ChevronLeft;

  const steps = content.contact.form.steps;
  const isLastStep = step === steps.length - 1;

  // TODO: Replace with the actual WhatsApp number
  const WHATSAPP_NUMBER = "201016495229"; 

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const msg = `*New Project Inquiry*
    
*Client:* ${formData.name}
*Company:* ${formData.company}
*Email:* ${formData.email}

*Project Type:* ${formData.projectType}
*Budget:* ${formData.budget} ${formData.currency}
*Timeline:* ${formData.timeline}

*Details:*
${formData.details}
    `;

    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank');
  };

  const renderStep = () => {
    switch(step) {
      case 0: // Contact Info
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-blue-400 mb-2 uppercase">{content.contact.form.fields.name}</label>
                <input 
                  type="text" 
                  required
                  value={formData.name} 
                  onChange={e => updateField('name', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 p-3 focus:border-blue-500 focus:outline-none text-white rounded-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-blue-400 mb-2 uppercase">{content.contact.form.fields.email}</label>
                <input 
                  type="email" 
                  required
                  value={formData.email} 
                  onChange={e => updateField('email', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 p-3 focus:border-blue-500 focus:outline-none text-white rounded-none"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono text-blue-400 mb-2 uppercase">{content.contact.form.fields.company}</label>
              <input 
                type="text" 
                value={formData.company} 
                onChange={e => updateField('company', e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 p-3 focus:border-blue-500 focus:outline-none text-white rounded-none"
                placeholder="Acme Corp"
              />
            </div>
          </div>
        );
      case 1: // Scope & Budget
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono text-blue-400 mb-4 uppercase">{content.contact.form.fields.projectType}</label>
              <div className="grid grid-cols-2 gap-3">
                {content.contact.form.types.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateField('projectType', type)}
                    className={`p-4 text-sm text-left rtl:text-right border transition-all ${
                      formData.projectType === type 
                        ? 'bg-blue-600/20 border-blue-500 text-white' 
                        : 'bg-slate-900/30 border-slate-700 text-slate-400 hover:border-slate-500'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-mono text-blue-400 mb-2 uppercase">{content.contact.form.fields.budget}</label>
                <input 
                  type="number" 
                  min="0"
                  value={formData.budget} 
                  onChange={e => updateField('budget', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 p-3 focus:border-blue-500 focus:outline-none text-white rounded-none"
                  placeholder="50000"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-mono text-blue-400 mb-2 uppercase">{content.contact.form.fields.currency}</label>
                <select 
                  value={formData.currency}
                  onChange={e => updateField('currency', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 p-3 focus:border-blue-500 focus:outline-none text-white rounded-none h-[50px]"
                >
                  {content.contact.form.currencies.map(curr => (
                    <option key={curr} value={curr}>{curr}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );
      case 2: // Details
        return (
          <div className="space-y-6">
             <div>
                <label className="block text-xs font-mono text-blue-400 mb-2 uppercase">{content.contact.form.fields.timeline}</label>
                <input 
                  type="text" 
                  value={formData.timeline} 
                  onChange={e => updateField('timeline', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 p-3 focus:border-blue-500 focus:outline-none text-white rounded-none"
                  placeholder="e.g. 3 months, ASAP"
                />
              </div>
            <div>
              <label className="block text-xs font-mono text-blue-400 mb-2 uppercase">{content.contact.form.fields.details}</label>
              <textarea 
                rows={4}
                value={formData.details} 
                onChange={e => updateField('details', e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 p-3 focus:border-blue-500 focus:outline-none text-white rounded-none resize-none"
                placeholder="Describe your vision..."
              />
            </div>
          </div>
        );
      case 3: // Review
        return (
          <div className="space-y-6">
            <h3 className="text-xl text-white mb-4">
              {language === 'ar' ? "تأكيد الإرسال" : "Confirm Transmission"}
            </h3>
            <div className="bg-slate-900/50 p-6 border border-white/10 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <span className="text-slate-500">{language === 'ar' ? "الهوية:" : "Identity:"}</span>
                <span className="text-white text-right rtl:text-left">{formData.name} ({formData.company})</span>
                
                <span className="text-slate-500">{language === 'ar' ? "اتصال:" : "Contact:"}</span>
                <span className="text-white text-right rtl:text-left">{formData.email}</span>
                
                <span className="text-slate-500">{language === 'ar' ? "الهدف:" : "Objective:"}</span>
                <span className="text-white text-right rtl:text-left">{formData.projectType}</span>
                
                <span className="text-slate-500">{language === 'ar' ? "الميزانية:" : "Budget:"}</span>
                <span className="text-white text-right rtl:text-left">{formData.budget} {formData.currency}</span>
                
                <span className="text-slate-500">{language === 'ar' ? "الجدول الزمني:" : "Timeline:"}</span>
                <span className="text-white text-right rtl:text-left">{formData.timeline}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              {language === 'ar' 
                ? "بالنقر على إرسال، سيتم فتح واتساب لإرسال التفاصيل مباشرة لفريقنا."
                : "By clicking Transmit, WhatsApp will open to send these details directly to our team."}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <GlassCard className="max-w-3xl mx-auto min-h-[500px] flex flex-col">
      {/* Progress Bar */}
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-800 -z-10" />
        {steps.map((label, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 bg-slate-950 px-2">
            <div className={`
              w-8 h-8 flex items-center justify-center border transition-all duration-300
              ${step >= idx 
                ? 'bg-blue-600 border-blue-500 text-white' 
                : 'bg-slate-900 border-slate-700 text-slate-500'}
            `}>
              {step > idx ? <CheckCircle className="w-4 h-4" /> : <span className="text-xs font-mono">{idx + 1}</span>}
            </div>
            <span className={`text-[10px] uppercase tracking-wider font-mono ${step >= idx ? 'text-blue-400' : 'text-slate-600'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: language === 'ar' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-between pt-8 border-t border-white/5 mt-8">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleBack} 
            disabled={step === 0}
            className={step === 0 ? 'invisible' : ''}
          >
            <BackIcon className={`w-4 h-4 inline ${language === 'ar' ? 'ml-2' : 'mr-2'}`} /> 
            {language === 'ar' ? "رجوع" : "Back"}
          </Button>

          {isLastStep ? (
            <Button type="submit" variant="primary">
              {language === 'ar' ? "إرسال عبر واتساب" : "Send via WhatsApp"} <Smartphone className={`w-4 h-4 inline ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
            </Button>
          ) : (
            <Button type="button" variant="primary" onClick={handleNext}>
              {language === 'ar' ? "التالي" : "Next Step"} <NextIcon className={`w-4 h-4 inline ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
            </Button>
          )}
        </div>
      </form>
    </GlassCard>
  );
};
