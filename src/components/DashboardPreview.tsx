import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, Users, Zap, Clock, ChevronRight, 
  Play, CheckCircle2, AlertCircle, RefreshCw, Database,
  Terminal, ArrowUpRight, ArrowDownRight, Sparkles, Filter, Calendar
} from 'lucide-react';

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<'overview' | 'automation' | 'logs'>('overview');
  const [hoveredDataIndex, setHoveredDataIndex] = useState<number | null>(null);
  
  // Interactive Workflow Simulator States
  const [simTrigger, setSimTrigger] = useState<string>('user_signup');
  const [simStatus, setSimStatus] = useState<'idle' | 'running' | 'success'>('idle');
  const [simStep, setSimStep] = useState<number>(0);
  const [logs, setLogs] = useState<Array<{ id: string; text: string; type: 'info' | 'success' | 'warn' | 'system'; time: string }>>([
    { id: '1', text: 'Synapse.ai Engine v2.0 initialized successfully', type: 'system', time: '12:00:01' },
    { id: '2', text: 'Secured database link established with pg_cluster-us-east', type: 'info', time: '12:00:02' },
    { id: '3', text: 'Awaiting webhook triggers on port :443...', type: 'info', time: '12:00:03' },
  ]);

  // Chart Data
  const monthlyRevenue = [
    { month: 'Jan', value: 12500, users: 1200 },
    { month: 'Feb', value: 14200, users: 1450 },
    { month: 'Mar', value: 18900, users: 1900 },
    { month: 'Apr', value: 24000, users: 2600 },
    { month: 'May', value: 32400, users: 3400 },
    { month: 'Jun', value: 48500, users: 4800 },
    { month: 'Jul', value: 59200, users: 5900 },
  ];

  const barData = [
    { day: 'Mon', count: 420 },
    { day: 'Tue', count: 590 },
    { day: 'Wed', count: 880 },
    { day: 'Thu', count: 710 },
    { day: 'Fri', count: 960 },
    { day: 'Sat', count: 340 },
    { day: 'Sun', count: 280 },
  ];

  // Simulator Workflow Actions Handler
  const triggerWorkflowSimulation = () => {
    if (simStatus === 'running') return;
    
    setSimStatus('running');
    setSimStep(1);
    
    const timestamp = () => new Date().toLocaleTimeString();

    // Reset logs with initial triggering message
    setLogs(prev => [
      { id: Date.now().toString() + '-1', text: `⚡ Trigger detected: [${simTrigger}]`, type: 'info', time: timestamp() },
      ...prev.slice(0, 5)
    ]);

    // Step 2: AI Summarizer & Processing (1.2s delay)
    setTimeout(() => {
      setSimStep(2);
      setLogs(prev => [
        { id: Date.now().toString() + '-2', text: `🧠 Invoking Synapse core model: analyzing payload context`, type: 'system', time: timestamp() },
        { id: Date.now().toString() + '-3', text: `✨ Generated response & categorized event under high priority`, type: 'success', time: timestamp() },
        ...prev
      ]);
    }, 1200);

    // Step 3: Database & Integrations sync (2.4s delay)
    setTimeout(() => {
      setSimStep(3);
      setLogs(prev => [
        { id: Date.now().toString() + '-4', text: `🗄️ Syncing customer profile with HubSpot and Salesforce`, type: 'info', time: timestamp() },
        { id: Date.now().toString() + '-5', text: `📬 Dispatched personalized onboarding email sequence`, type: 'info', time: timestamp() },
        ...prev
      ]);
    }, 2400);

    // Step 4: Finished (3.6s delay)
    setTimeout(() => {
      setSimStatus('success');
      setSimStep(4);
      setLogs(prev => [
        { id: Date.now().toString() + '-6', text: `✅ Automated workflow completed successfully in 3.52s`, type: 'success', time: timestamp() },
        ...prev
      ]);
    }, 3600);
  };

  // SVG Chart Config
  const chartHeight = 200;
  const chartWidth = 500;
  const padding = 40;
  
  // Calculate SVG paths for line chart
  const maxVal = Math.max(...monthlyRevenue.map(d => d.value)) * 1.1;
  const minVal = 0;
  
  const getX = (index: number) => {
    return padding + (index * (chartWidth - padding * 2)) / (monthlyRevenue.length - 1);
  };
  
  const getY = (value: number) => {
    return chartHeight - padding - ((value - minVal) * (chartHeight - padding * 2)) / (maxVal - minVal);
  };

  let pointsStr = '';
  monthlyRevenue.forEach((d, i) => {
    pointsStr += `${getX(i)},${getY(d.value)} `;
  });

  // Calculate coordinates for area gradient
  let areaPointsStr = `${getX(0)},${chartHeight - padding} `;
  monthlyRevenue.forEach((d, i) => {
    areaPointsStr += `${getX(i)},${getY(d.value)} `;
  });
  areaPointsStr += `${getX(monthlyRevenue.length - 1)},${chartHeight - padding}`;

  return (
    <section id="dashboard" className="py-24 bg-zinc-950 relative">
      {/* Background Ornaments */}
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10 inline-block mb-3 backdrop-blur-md">
            Interactive Product Preview
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Command Center for Intelligent Automation
          </h2>
          <p className="text-zinc-400 font-sans text-base sm:text-lg">
            Interact with our live simulation and charts below to see how our unified system handles high-scale workflows in real-time.
          </p>
        </div>

        {/* Dashboard Frame (SaaS Mockup) - Frosted Glass Container */}
        <div className="bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
          {/* Dashboard Header Bar */}
          <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              {/* Window Controls */}
              <div className="flex space-x-1.5 mr-3">
                <span className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/40" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/40" />
                <span className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/40" />
              </div>
              <span className="text-zinc-500 text-xs font-mono select-none">|</span>
              <span className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 font-display">
                <Database className="h-4 w-4 text-indigo-400" />
                synapse-platform-v2
              </span>
            </div>

            {/* Simulated Navigation Tabs */}
            <div className="flex bg-black/40 p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'overview'
                    ? 'bg-white/10 text-indigo-400 border border-white/10 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('automation')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'automation'
                    ? 'bg-white/10 text-indigo-400 border border-white/10 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                AI Workflow Simulator
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'logs'
                    ? 'bg-white/10 text-indigo-400 border border-white/10 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Live Orchestrator Logs
              </button>
            </div>
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Metric Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* CARD 1 */}
                    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-indigo-500/30 transition-all duration-300 group backdrop-blur-md">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-zinc-400 font-medium font-sans">Monthly Recurring Revenue</span>
                        <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">$59,200</span>
                        <span className="text-xs font-semibold text-cyan-400 flex items-center bg-cyan-400/5 px-2 py-0.5 rounded border border-cyan-400/20">
                          <ArrowUpRight className="h-3 w-3 mr-0.5" />
                          +31.2%
                        </span>
                      </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-indigo-500/30 transition-all duration-300 group backdrop-blur-md">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-zinc-400 font-medium font-sans">Total Managed Workflows</span>
                        <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          <Zap className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">841,290</span>
                        <span className="text-xs font-semibold text-cyan-400 flex items-center bg-cyan-400/5 px-2 py-0.5 rounded border border-cyan-400/20">
                          <ArrowUpRight className="h-3 w-3 mr-0.5" />
                          +24.5%
                        </span>
                      </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-indigo-500/30 transition-all duration-300 group backdrop-blur-md">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-zinc-400 font-medium font-sans">Active Enterprise Nodes</span>
                        <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          <Users className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">5,900</span>
                        <span className="text-xs font-semibold text-cyan-400 flex items-center bg-cyan-400/5 px-2 py-0.5 rounded border border-cyan-400/20">
                          <ArrowUpRight className="h-3 w-3 mr-0.5" />
                          +18.9%
                        </span>
                      </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-indigo-500/30 transition-all duration-300 group backdrop-blur-md">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-zinc-400 font-medium font-sans">Avg. Node Automation Time</span>
                        <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          <Clock className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">1.48s</span>
                        <span className="text-xs font-semibold text-cyan-400 flex items-center bg-cyan-400/5 px-2 py-0.5 rounded border border-cyan-400/20">
                          <ArrowDownRight className="h-3 w-3 mr-0.5" />
                          -14.2%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Charts Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Line Chart Component (Left/3cols) */}
                    <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-xl relative backdrop-blur-md">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 font-display">
                            Revenue Expansion History
                          </h3>
                          <p className="text-xs text-zinc-500 font-sans">Recurring platform transaction volumes (MRR)</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-indigo-400 bg-indigo-500/5 px-2.5 py-1 rounded-md border border-indigo-500/10 flex items-center gap-1 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" /> Live
                          </span>
                        </div>
                      </div>

                      {/* Interactive Custom SVG Line Chart */}
                      <div className="relative w-full overflow-hidden">
                        <svg
                          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                          className="w-full h-[220px] overflow-visible"
                        >
                          {/* Grid Lines */}
                          <line x1={padding} y1={getY(15000)} x2={chartWidth - padding} y2={getY(15000)} stroke="#27272a" strokeDasharray="3 3" strokeWidth="0.5" />
                          <line x1={padding} y1={getY(30000)} x2={chartWidth - padding} y2={getY(30000)} stroke="#27272a" strokeDasharray="3 3" strokeWidth="0.5" />
                          <line x1={padding} y1={getY(45000)} x2={chartWidth - padding} y2={getY(45000)} stroke="#27272a" strokeDasharray="3 3" strokeWidth="0.5" />
                          
                          {/* X Axis Bottom Line */}
                          <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} stroke="#3f3f46" strokeWidth="1" />

                          {/* Gradient Fill Under Line */}
                          <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <polygon points={areaPointsStr} fill="url(#chartGradient)" />

                          {/* Line Path */}
                          <polyline
                            fill="none"
                            stroke="#818cf8"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points={pointsStr}
                          />

                          {/* Interaction Points */}
                          {monthlyRevenue.map((d, i) => (
                            <g key={i}>
                              <circle
                                cx={getX(i)}
                                cy={getY(d.value)}
                                r={hoveredDataIndex === i ? '7' : '4'}
                                className="fill-zinc-950 stroke-indigo-400 transition-all duration-150 cursor-pointer"
                                strokeWidth="3"
                                onMouseEnter={() => setHoveredDataIndex(i)}
                                onMouseLeave={() => setHoveredDataIndex(null)}
                              />
                              {/* Labels */}
                              <text
                                x={getX(i)}
                                y={chartHeight - 15}
                                textAnchor="middle"
                                className="fill-zinc-500 font-mono text-[10px] uppercase font-semibold"
                              >
                                {d.month}
                              </text>
                            </g>
                          ))}
                        </svg>

                        {/* Interactive Float Tooltip */}
                        {hoveredDataIndex !== null && (
                          <div
                            className="absolute bg-zinc-900 border border-white/10 p-2.5 rounded-lg shadow-xl text-left z-20 pointer-events-none"
                            style={{
                              left: `${(getX(hoveredDataIndex) / chartWidth) * 100}%`,
                              top: `${(getY(monthlyRevenue[hoveredDataIndex].value) / chartHeight) * 100 - 35}%`,
                              transform: 'translateX(-50%)',
                            }}
                          >
                            <p className="text-[10px] text-zinc-400 uppercase font-mono font-bold">
                              {monthlyRevenue[hoveredDataIndex].month} Revenue
                            </p>
                            <p className="text-sm font-bold text-white font-display">
                              ${monthlyRevenue[hoveredDataIndex].value.toLocaleString()}
                            </p>
                            <p className="text-[10px] text-indigo-400 font-semibold font-sans">
                              {monthlyRevenue[hoveredDataIndex].users.toLocaleString()} Active Users
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bar Chart Component (Right/2cols) */}
                    <div className="lg:col-span-2 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 font-display">
                          Daily Automations Executed
                        </h3>
                        <p className="text-xs text-zinc-500 font-sans">Hourly task load handled by intelligence engine</p>
                      </div>

                      {/* Bar Graph Graphic */}
                      <div className="flex items-end justify-between h-[160px] pt-4 px-2">
                        {barData.map((d, i) => {
                          const maxCount = Math.max(...barData.map(b => b.count));
                          const barHeight = (d.count / maxCount) * 100;
                          return (
                            <div key={i} className="flex flex-col items-center flex-1 group">
                              {/* Count Tooltip on Hover */}
                              <span className="text-[10px] font-mono text-indigo-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 -mb-5 bg-zinc-950 px-1 py-0.5 rounded border border-white/5">
                                {d.count}
                              </span>
                              {/* The Bar */}
                              <div className="w-5 sm:w-7 bg-gradient-to-t from-indigo-600/50 to-indigo-400 rounded-t-md relative overflow-hidden transition-all duration-300 hover:brightness-110 shadow-lg shadow-indigo-500/5" style={{ height: `${barHeight}%` }}>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase mt-2">{d.day}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: AUTOMATION SIMULATOR */}
              {activeTab === 'automation' && (
                <motion.div
                  key="automation"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Simulator Controls & Flow Trigger */}
                    <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-between backdrop-blur-md">
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 font-display mb-1">
                          <Sparkles className="h-4 w-4 text-indigo-400" />
                          Interactive Trigger Tester
                        </h3>
                        <p className="text-xs text-zinc-500 mb-6 font-sans">
                          Select an API trigger event, then run the simulation node to watch real-time flow resolution.
                        </p>

                        <label className="block text-xs font-mono uppercase font-bold text-zinc-400 mb-2">
                          1. Select Event Trigger:
                        </label>
                        <div className="grid grid-cols-2 gap-2.5 mb-6">
                          {[
                            { id: 'user_signup', label: 'Customer Signup' },
                            { id: 'billing_success', label: 'Billing Success' },
                            { id: 'api_error', label: 'System Alert (API)' },
                            { id: 'support_ticket', label: 'Support Ticket' },
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                if (simStatus !== 'running') setSimTrigger(opt.id);
                              }}
                              disabled={simStatus === 'running'}
                              className={`px-3 py-2.5 rounded-lg border text-left text-xs font-semibold transition-all ${
                                simTrigger === opt.id
                                  ? 'bg-indigo-500/10 border-indigo-400 text-indigo-400'
                                  : 'bg-black/40 border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <button
                          onClick={triggerWorkflowSimulation}
                          disabled={simStatus === 'running'}
                          className={`w-full py-4 px-4 rounded-full font-bold tracking-wide flex items-center justify-center gap-2.5 transition-all duration-200 ${
                            simStatus === 'running'
                              ? 'bg-zinc-800 border border-white/5 text-zinc-500 cursor-not-allowed'
                              : 'bg-white hover:bg-zinc-200 text-black shadow-lg shadow-white/5'
                          }`}
                        >
                          <Play className={`h-4.5 w-4.5 ${simStatus === 'running' ? 'animate-spin' : ''}`} />
                          <span>{simStatus === 'running' ? 'Processing Flow...' : 'Execute Automated Flow'}</span>
                        </button>
                        {simStatus === 'success' && (
                          <p className="text-[11px] text-cyan-400 text-center mt-3 font-semibold font-sans animate-pulse">
                            🎉 Success! Simulation completed. View logs below.
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Node Visualizer Graph */}
                    <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col justify-center min-h-[300px] relative backdrop-blur-md">
                      {/* Connection Line */}
                      <div className="absolute left-1/2 top-[50px] bottom-[50px] w-0.5 bg-gradient-to-b from-indigo-500/20 via-indigo-500/40 to-cyan-500/20 -translate-x-1/2 pointer-events-none" />

                      <div className="space-y-6 relative z-10">
                        {/* Node 1: Trigger */}
                        <div className="flex justify-center">
                          <div className={`px-4 py-3 rounded-xl border flex items-center gap-3 w-[260px] shadow-lg transition-all duration-300 backdrop-blur-md ${
                            simStep >= 1 ? 'bg-indigo-500/10 border-indigo-400 text-indigo-400' : 'bg-black/60 border-white/10 text-zinc-500'
                          }`}>
                            <div className={`w-3 h-3 rounded-full ${simStep >= 1 ? 'bg-indigo-400 animate-ping' : 'bg-zinc-800'}`} />
                            <div className="text-left">
                              <span className="text-[10px] font-mono font-bold uppercase block text-zinc-500">Node Trigger</span>
                              <span className="text-xs font-bold text-zinc-200">
                                {simTrigger === 'user_signup' && 'On Customer Signup'}
                                {simTrigger === 'billing_success' && 'On Invoice Success'}
                                {simTrigger === 'api_error' && 'On API Fail Alert'}
                                {simTrigger === 'support_ticket' && 'On Support Received'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Node 2: AI Processor */}
                        <div className="flex justify-center">
                          <div className={`px-4 py-3 rounded-xl border flex items-center gap-3 w-[260px] shadow-lg transition-all duration-300 backdrop-blur-md ${
                            simStep >= 2 ? 'bg-indigo-500/10 border-indigo-400 text-indigo-400' : 'bg-black/60 border-white/10 text-zinc-500'
                          }`}>
                            <div className={`w-3 h-3 rounded-full ${simStep === 2 ? 'bg-purple-400 animate-bounce' : simStep > 2 ? 'bg-indigo-400' : 'bg-zinc-800'}`} />
                            <div className="text-left">
                              <span className="text-[10px] font-mono font-bold uppercase block text-zinc-500">Synapse Core Engine</span>
                              <span className="text-xs font-bold text-zinc-200">AI Context Classification</span>
                            </div>
                          </div>
                        </div>

                        {/* Node 3: Integrations Sync */}
                        <div className="flex justify-center">
                          <div className={`px-4 py-3 rounded-xl border flex items-center gap-3 w-[260px] shadow-lg transition-all duration-300 backdrop-blur-md ${
                            simStep >= 3 ? 'bg-indigo-500/10 border-indigo-400 text-indigo-400' : 'bg-black/60 border-white/10 text-zinc-500'
                          }`}>
                            <div className={`w-3 h-3 rounded-full ${simStep === 3 ? 'bg-cyan-400 animate-spin' : simStep > 3 ? 'bg-indigo-400' : 'bg-zinc-800'}`} />
                            <div className="text-left">
                              <span className="text-[10px] font-mono font-bold uppercase block text-zinc-500">CRM & Messaging Integration</span>
                              <span className="text-xs font-bold text-zinc-200">Salesforce & Discord Dispatch</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: LIVE LOGS */}
              {activeTab === 'logs' && (
                <motion.div
                  key="logs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <Terminal className="h-4 w-4 text-indigo-400" />
                      Live Platform Logs
                    </span>
                    <button
                      onClick={() => {
                        const ts = new Date().toLocaleTimeString();
                        setLogs(prev => [
                          { id: Date.now().toString(), text: 'Cleared manual trace registers', type: 'warn', time: ts },
                          { id: (Date.now() + 1).toString(), text: 'Tracing system processes restarted', type: 'system', time: ts }
                        ]);
                      }}
                      className="text-[11px] font-mono font-bold text-zinc-500 hover:text-indigo-400 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
                    >
                      Reset Logs
                    </button>
                  </div>

                  {/* Log terminal */}
                  <div className="bg-black/60 border border-white/10 rounded-xl p-4 font-mono text-xs text-zinc-300 h-[280px] overflow-y-auto space-y-2.5 backdrop-blur-md">
                    {logs.map((log) => (
                      <div key={log.id} className="flex items-start space-x-2">
                        <span className="text-zinc-600 select-none">[{log.time}]</span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold select-none ${
                          log.type === 'system' ? 'bg-purple-950/80 text-purple-400 border border-purple-800/20' :
                          log.type === 'success' ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-800/20' :
                          log.type === 'warn' ? 'bg-amber-950/80 text-amber-400 border border-amber-800/20' :
                          'bg-zinc-900 text-zinc-400 border border-white/5'
                        }`}>
                          {log.type.toUpperCase()}
                        </span>
                        <span className="flex-1 break-all text-zinc-300">{log.text}</span>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2 pt-1">
                      <span className="w-1.5 h-3.5 bg-indigo-400 animate-pulse" />
                      <span className="text-zinc-600 italic">Ready for next trigger simulation...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
