import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalIcon, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [topic, setTopic] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', email: 'sourabhsinghrajput51@gmail.com', company: '', size: '10-50' });

  const topics = [
    { id: 'automations', label: 'AI Workflow Automations', desc: 'Focus on replacing manual pipeline overheads.' },
    { id: 'analytics', label: 'Enterprise Intelligence Metrics', desc: 'Focus on model outputs, transaction volume, & cost analyses.' },
    { id: 'security', label: 'SOC-2 Compliance & Encryption', desc: 'Focus on isolated sandbox servers and compliance protocols.' },
  ];

  const timeslots = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'];

  const handleNextStep = () => {
    if (step === 1 && !topic) return;
    if (step === 2 && (!selectedDate || !selectedTime)) return;
    setStep(prev => (prev + 1) as 1 | 2 | 3);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setTopic('');
    setSelectedDate('');
    setSelectedTime('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        {/* Modal Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white/5 border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10 backdrop-blur-md font-sans"
        >
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
            id="close-demo-modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Progress Indicator */}
          {step < 3 && (
            <div className="h-1 bg-white/5 w-full flex">
              <div
                className="h-full bg-indigo-400 transition-all duration-300"
                style={{ width: `${step === 1 ? '50%' : '100%'}` }}
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* STEP 1: SELECT TOPIC */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="h-3.5 w-3.5 animate-spin" /> Step 1 of 2
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    What would you like to build?
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                    Select the primary core capability you want our engineers to demonstrate.
                  </p>
                </div>

                <div className="space-y-3">
                  {topics.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTopic(t.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        topic === t.id
                          ? 'bg-indigo-500/10 border-indigo-400 text-indigo-400 shadow-md shadow-indigo-500/5'
                          : 'bg-white/5 border-white/10 text-zinc-300 hover:border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <span className="font-bold text-sm block">{t.label}</span>
                      <span className="text-xs text-zinc-400 mt-1 block leading-relaxed">{t.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleNextStep}
                    disabled={!topic}
                    className={`px-5 py-3 rounded-lg font-bold text-sm flex items-center gap-1.5 cursor-pointer transition-all ${
                      topic
                        ? 'bg-white hover:bg-zinc-100 text-black shadow-lg shadow-indigo-500/10'
                        : 'bg-white/5 text-zinc-500 cursor-not-allowed border border-white/10'
                    }`}
                  >
                    <span>Next: Choose Time</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: CHOOSE TIME */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-zinc-500 hover:text-indigo-400 font-bold mb-2 uppercase tracking-wide block"
                  >
                    ← Back to Topics
                  </button>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Schedule demo slot
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                    Select your preferred date and time slot below for a private presentation.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-zinc-400 mb-2 flex items-center gap-1">
                      <CalIcon className="h-3.5 w-3.5 text-indigo-400" /> Choose Date:
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-zinc-400 mb-2 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-indigo-400" /> Choose Hour (UTC Time):
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeslots.map(t => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          type="button"
                          className={`py-3 rounded-lg border text-xs font-semibold transition-all ${
                            selectedTime === t
                              ? 'bg-indigo-500/10 border-indigo-400 text-indigo-400 font-bold'
                              : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/20'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    className={`px-5 py-3 rounded-lg font-bold text-sm flex items-center gap-1.5 cursor-pointer transition-all ${
                      selectedDate && selectedTime
                        ? 'bg-white hover:bg-zinc-100 text-black shadow-lg shadow-indigo-500/10'
                        : 'bg-white/5 text-zinc-500 cursor-not-allowed border border-white/10'
                    }`}
                  >
                    <span>Finalize Booking</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: SUCCESS CONFIRMATION */}
            {step === 3 && (
              <div className="text-center py-6 space-y-6">
                <div className="mx-auto h-16 w-16 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center mb-2">
                  <CheckCircle2 className="h-8 w-8 text-indigo-400 animate-bounce" />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Presentation Booked!
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mx-auto">
                    We have scheduled your private session for <span className="text-indigo-400 font-bold font-mono">{selectedDate}</span> at <span className="text-indigo-400 font-bold font-mono">{selectedTime}</span>.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-left text-xs text-zinc-400 max-w-sm mx-auto space-y-2">
                  <p>📧 A calendar invite and Google Meet link have been dispatched to:</p>
                  <p className="font-bold font-mono text-indigo-400">{formData.email}</p>
                  <p className="text-[10px] text-zinc-500 mt-1">If you need to change your slot, simply respond directly to the calendar invitation.</p>
                </div>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3.5 bg-white hover:bg-zinc-100 text-black font-bold rounded-xl text-sm transition-all"
                >
                  Done, return to Page
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
