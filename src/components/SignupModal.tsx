import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Loader2, Sparkles, Terminal, ArrowRight, ShieldCheck } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [email, setEmail] = useState('sourabhsinghrajput51@gmail.com');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [signUpState, setSignUpState] = useState<'idle' | 'provisioning' | 'completed'>('idle');
  
  // Provisioning checklist step
  const [provStep, setProvStep] = useState(0);

  const steps = [
    'Creating isolated enterprise database clusters...',
    'Provisioning sandbox routing workspace nodes...',
    'Generating 2048-bit client encryption keys...',
    'Establishing secure webhook gateway protocols...',
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (signUpState === 'provisioning') {
      if (provStep < steps.length) {
        timer = setTimeout(() => {
          setProvStep(prev => prev + 1);
        }, 1200);
      } else {
        timer = setTimeout(() => {
          setSignUpState('completed');
        }, 800);
      }
    }
    return () => clearTimeout(timer);
  }, [signUpState, provStep]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!company || !password) return;
    setSignUpState('provisioning');
    setProvStep(0);
  };

  const handleResetAndClose = () => {
    setSignUpState('idle');
    setProvStep(0);
    setCompany('');
    setPassword('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white/5 border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative z-10 backdrop-blur-md font-sans"
        >
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer"
            id="close-signup-modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              
              {/* IDLE: SIGNUP FORM */}
              {signUpState === 'idle' && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10 inline-block mb-3 backdrop-blur-md">
                      14-Day Free Access
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Create Sandbox Account
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-xs mx-auto">
                      Fill out company details to configure your isolated Synapse database and API nodes.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-zinc-400 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        disabled
                        value={email}
                        className="w-full bg-white/5 border border-white/5 text-zinc-400 text-sm rounded-xl px-4 py-3 outline-none cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-zinc-400 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Corporation..."
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/50 text-gray-100 text-sm rounded-xl px-4 py-3 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-zinc-400 mb-1.5">
                        Choose Password
                      </label>
                      <input
                        type="password"
                        required
                        minLength={6}
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/50 text-gray-100 text-sm rounded-xl px-4 py-3 outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-4 bg-white hover:bg-zinc-100 text-black font-bold rounded-xl text-sm transition-all duration-200 mt-2 flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-indigo-500/10"
                    >
                      <span>Initialize Trial Sandbox</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                </motion.div>
              )}

              {/* PROVISIONING: AUTOMATED SIMULATOR CHIPS */}
              {signUpState === 'provisioning' && (
                <motion.div
                  key="provisioning"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 py-4"
                >
                  <div className="text-center">
                    <Loader2 className="h-8 w-8 text-indigo-400 animate-spin mx-auto mb-3" />
                    <h3 className="font-display text-lg font-bold text-white">
                      Assembling Workspace...
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans mt-0.5">
                      Please hold while we isolate database kernels for {company || 'your team'}.
                    </p>
                  </div>

                  {/* Sandbox checklist */}
                  <div className="bg-zinc-950/40 border border-white/5 rounded-xl p-4.5 space-y-3 font-mono text-[11px] text-zinc-300">
                    {steps.map((stepStr, idx) => {
                      const isDone = provStep > idx;
                      const isCurrent = provStep === idx;

                      return (
                        <div
                          key={idx}
                          className={`flex items-center justify-between ${
                            isDone ? 'text-indigo-400' : isCurrent ? 'text-gray-100' : 'text-zinc-600'
                          }`}
                        >
                          <span className="flex-1 mr-2">{stepStr}</span>
                          {isDone ? (
                            <span className="text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 select-none">
                              DONE
                            </span>
                          ) : isCurrent ? (
                            <span className="text-amber-400 animate-pulse select-none">
                              RUNNING
                            </span>
                          ) : (
                            <span className="text-zinc-850 select-none">
                              WAIT
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* COMPLETED: PERSONALIZED WELCOME CARD */}
              {signUpState === 'completed' && (
                <motion.div
                  key="completed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-6 space-y-6"
                >
                  <div className="mx-auto h-16 w-16 rounded-full bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center">
                    <ShieldCheck className="h-8 w-8 text-indigo-400" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      Workspace Ready!
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto font-sans">
                      Your trial has been initiated for <span className="text-indigo-400 font-bold">{company}</span>.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-left text-xs text-zinc-300 space-y-2 max-w-sm mx-auto font-sans">
                    <p className="font-bold text-gray-100 flex items-center gap-1">
                      <Terminal className="h-4 w-4 text-indigo-400" /> Sandbox Credentials:
                    </p>
                    <div className="grid grid-cols-3 gap-1 pt-1.5 font-mono text-[11px] text-zinc-400">
                      <span>Gateway:</span>
                      <span className="col-span-2 text-indigo-400 font-bold">synapse-platform-v2</span>
                      <span>Username:</span>
                      <span className="col-span-2 font-bold">{email}</span>
                      <span>API Scope:</span>
                      <span className="col-span-2 text-purple-400 font-bold">read:write:admin</span>
                    </div>
                  </div>

                  <button
                    onClick={handleResetAndClose}
                    className="w-full py-4 bg-white hover:bg-zinc-100 text-black font-bold rounded-xl text-sm transition-all"
                  >
                    Open Platform Dashboard
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
