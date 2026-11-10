import React, { useState } from 'react';
import { X, Mail, KeyRound, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function OtpSimulatorModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('employee@bimqp.com');
  const [step, setStep] = useState(1); // 1: enter email, 2: enter code, 3: logged in
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [simulatedCode, setSimulatedCode] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleRequestCode = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid work email address.');
      return;
    }
    setError('');
    // Generate a random 6-digit code for simulation
    const generated = Math.floor(100000 + Math.random() * 900000).toString();
    setSimulatedCode(generated);
    setCode(generated.split(''));
    setStep(2);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const resetModal = () => {
    setStep(1);
    setCode(['', '', '', '', '', '']);
    setSimulatedCode('');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#161b26] border border-[#2a3245] rounded-2xl p-6 shadow-2xl relative space-y-6">
        
        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white bg-[#1e2433] rounded-lg border border-[#2a3245]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 uppercase font-semibold">
            <KeyRound className="w-4 h-4" />
            <span>Brevo Email OTP Simulator</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Passwordless Sign-In
          </h3>
          <p className="text-xs text-slate-400">
            No passwords exist to be stolen or reset. Single-use 6-digit code sent straight to work email.
          </p>
        </div>

        {/* Step 1: Input Email */}
        {step === 1 && (
          <form onSubmit={handleRequestCode} className="space-y-4 font-mono text-xs">
            <div className="space-y-1">
              <label className="text-slate-300 font-semibold">Work Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@bimqp.com"
                  className="w-full pl-9 pr-3 py-2.5 bg-[#0e1219] border border-[#2a3245] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#fa6008]"
                  required
                />
              </div>
              {error && <p className="text-red-400 text-[11px] mt-1">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#fa6008] to-[#e05300] hover:from-[#e05300] hover:to-[#c94700] shadow-glow-orange transition-all flex items-center justify-center gap-2"
            >
              <span>Send 6-Digit Code</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Step 2: Input / View 6-Digit Code */}
        {step === 2 && (
          <div className="space-y-4 font-mono text-xs">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 space-y-1">
              <div className="font-bold flex items-center justify-between">
                <span>SIMULATED EMAIL INBOX</span>
                <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded">Expires in 10:00</span>
              </div>
              <p className="text-[11px] text-amber-200/80">
                Brevo Mailer dispatched verification code <strong className="text-white font-mono text-sm underline">{simulatedCode}</strong> to {email}.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-slate-300 font-semibold">Enter 6-Digit Verification Code</label>
              <div className="flex justify-between gap-2">
                {code.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => {
                      const newCode = [...code];
                      newCode[idx] = e.target.value;
                      setCode(newCode);
                    }}
                    className="w-11 h-12 text-center text-lg font-bold bg-[#0e1219] border border-[#2a3245] rounded-xl text-white focus:outline-none focus:border-[#fa6008]"
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleVerify}
              className="w-full py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-glow-emerald transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verify & Sign In</span>
            </button>
          </div>
        )}

        {/* Step 3: Success Screen */}
        {step === 3 && (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">
                Authentication Successful!
              </h4>
              <p className="text-xs text-slate-400">
                Logged in as <span className="text-slate-200 font-mono font-semibold">{email}</span>. Session token encrypted & stored in local device vault.
              </p>
            </div>
            <button
              onClick={resetModal}
              className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-[#1e2433] hover:bg-[#2a3245] border border-[#2a3245]"
            >
              Close Simulator
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
