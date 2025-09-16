"use client";
import React, { useState } from "react";

const CircularityCockpit: React.FC = () => {
  // State
  const [kpis, setKpis] = useState({
    gwp: 1320,
    circularityScore: 42,
  });

  const [scenario, setScenario] = useState({
    recycledContent: 26,
    transport: "truck",
  });

  const [wizardOpen, setWizardOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);
  const [userInput, setUserInput] = useState("");

  // Run Approximation
  const runApproximation = () => {
    const rcFactor = 1 - scenario.recycledContent / 100;
    const newGwp = Math.round(1320 * rcFactor + 50);
    const newCircularity = Math.min(100, 40 + scenario.recycledContent * 0.8);

    setKpis({
      gwp: newGwp,
      circularityScore: newCircularity,
    });
  };

  // Chatbot send message
  const sendMessage = async () => {
    if (!userInput.trim()) return;

    setChatHistory((prev) => [...prev, { sender: "You", text: userInput }]);

    try {
      const res = await fetch("/chat_gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userInput }),
      });
      const data = await res.json();
      setChatHistory((prev) => [...prev, { sender: "Bot", text: data.answer }]);
    } catch (err) {
      setChatHistory((prev) => [...prev, { sender: "Bot", text: "Error connecting to server." }]);
    }

    setUserInput("");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-3">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold">Project</h3>
            <div className="mt-3 text-sm text-gray-600">
              <div className="mb-2">
                <label className="block text-xs text-gray-500">Name</label>
                <input
                  defaultValue="Sample Project"
                  className="mt-1 w-full border rounded p-2 text-sm"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-500">Organization</label>
                <input
                  defaultValue="Acme Metals"
                  className="mt-1 w-full border rounded p-2 text-sm"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-500">Functional Unit</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    defaultValue={1}
                    className="mt-1 w-1/2 border rounded p-2 text-sm"
                  />
                  <select className="mt-1 w-1/2 border rounded p-2 text-sm">
                    <option>tonne</option>
                    <option>kg</option>
                    <option>unit</option>
                  </select>
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-500">System Boundary</label>
                <select className="mt-1 w-full border rounded p-2 text-sm">
                  <option value="cradle-to-gate">Cradle-to-gate</option>
                  <option value="cradle-to-grave">Cradle-to-grave</option>
                  <option value="cradle-to-cradle">Cradle-to-cradle</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-500">Region</label>
                <select className="mt-1 w-full border rounded p-2 text-sm">
                  <option>India</option>
                  <option>China</option>
                  <option>EU</option>
                  <option>USA</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-500">Metal</label>
                <select className="mt-1 w-full border rounded p-2 text-sm">
                  <option>Aluminium</option>
                  <option>Copper</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => setWizardOpen(!wizardOpen)}
                  className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                >
                  {wizardOpen ? "Hide Wizard" : "Open Wizard"}
                </button>
                <button
                  onClick={runApproximation}
                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Run Approximation
                </button>
              </div>
              <div className="mt-4 text-xs text-gray-400">
                Quick tips: use the slider in Scenario to adjust recycled content.
                Click Sankey nodes to inspect provenance.
              </div>
            </div>
          </div>

          <div className="mt-4 bg-white p-4 rounded-2xl shadow-sm">
            <h4 className="text-sm font-semibold">Scenario Controls</h4>
            <div className="mt-3">
              <label className="block text-xs text-gray-500">
                Recycled content: <span>{scenario.recycledContent}</span>%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={scenario.recycledContent}
                onChange={(e) =>
                  setScenario({ ...scenario, recycledContent: Number(e.target.value) })
                }
                className="w-full"
              />
            </div>
            <div className="mt-3">
              <label className="block text-xs text-gray-500">Transport mode</label>
              <select
                value={scenario.transport}
                onChange={(e) => setScenario({ ...scenario, transport: e.target.value })}
                className="mt-1 w-full border rounded p-2 text-sm"
              >
                <option value="truck">Truck</option>
                <option value="rail">Rail</option>
                <option value="ship">Ship</option>
              </select>
            </div>
            <div className="mt-3 flex gap-2">
              <button
                onClick={runApproximation}
                className="w-full bg-sky-600 text-white py-2 rounded"
              >
                Apply
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="col-span-9">
          {/* KPIs */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col">
              <div className="text-xs text-gray-500">GWP per FU</div>
              <div className="text-2xl font-semibold mt-2">{kpis.gwp} kg CO₂e</div>
              <div className="text-xs text-gray-400 mt-1">95% CI: 1050 — 1560</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col">
              <div className="text-xs text-gray-500">Circularity Score</div>
              <div className="text-2xl font-semibold mt-2">
                {Math.round(kpis.circularityScore)}/100
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Recycled {scenario.recycledContent}%
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col">
              <div className="text-xs text-gray-500">Cost per FU</div>
              <div className="text-2xl font-semibold mt-2">₹ 1200</div>
              <div className="text-xs text-gray-400 mt-1">Est.</div>
            </div>
          </div>

          {/* Sankey Placeholder */}
          <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Circular Sankey & Flow</h3>
            <div className="mt-4 flex gap-6 items-center">
              <div>
                <div className="text-sm font-medium">Feedstock</div>
                <div className="mt-2 flex items-end gap-2">
                  <div className="text-xs text-gray-600">Virgin</div>
                  <div
                    className="bg-red-300 rounded h-12"
                    style={{
                      width: Math.max(60, (100 - scenario.recycledContent) / 100 * 300) + "px",
                    }}
                  ></div>
                </div>
                <div className="mt-2 flex items-end gap-2">
                  <div className="text-xs text-gray-600">Recycled</div>
                  <div
                    className="bg-green-300 rounded h-8"
                    style={{
                      width: Math.max(20, (scenario.recycledContent / 100) * 300) + "px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex-1">
                {/* Static Sankey SVG */}
                <svg viewBox="0 0 800 200" className="w-full h-48">
                  <rect
                    x="50"
                    y="30"
                    width="160"
                    height="40"
                    rx="6"
                    fill="#eef2ff"
                    stroke="#c7d2fe"
                  />
                  <text x="130" y="55" textAnchor="middle" fill="#3730a3">
                    Extraction
                  </text>
                  <rect
                    x="260"
                    y="30"
                    width="160"
                    height="40"
                    rx="6"
                    fill="#fff7ed"
                    stroke="#ffd8a8"
                  />
                  <text x="340" y="55" textAnchor="middle" fill="#92400e">
                    Smelting
                  </text>
                  <rect
                    x="470"
                    y="30"
                    width="160"
                    height="40"
                    rx="6"
                    fill="#ecfccb"
                    stroke="#bbf7d0"
                  />
                  <text x="550" y="55" textAnchor="middle" fill="#166534">
                    Product
                  </text>
                  <path
                    d="M550 70 C 650 80, 700 140, 700 160"
                    stroke="#10b981"
                    strokeWidth="8"
                    fill="none"
                    opacity="0.6"
                  />
                  <text x="710" y="150" fill="#065f46">
                    Recycled →
                  </text>
                  <path
                    d="M700 160 C 500 180, 300 180, 120 160"
                    stroke="#9ca3af"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    fill="none"
                    opacity="0.7"
                  />
                </svg>
              </div>
            </div>

            {/* Chatbot */}
            <div className="mt-6 p-4 border rounded-2xl bg-gray-50 max-w-2xl">
              <h3 className="font-semibold">Chatbot Assistant (Powered by Gemini LLM)</h3>
              <div className="h-64 overflow-y-auto border p-2 bg-white mb-2">
                {chatHistory.map((msg, idx) => (
                  <p key={idx}>
                    <b>{msg.sender}:</b> {msg.text}
                  </p>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask your question..."
                  className="flex-1 border p-2 rounded"
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Wizard */}
      {wizardOpen && (
        <div className="fixed right-6 bottom-6 w-96 z-50">
          <div className="bg-white p-4 rounded-2xl shadow-2xl border">
            <h4 className="font-semibold">Input Wizard (Quick)</h4>
            <div className="mt-3 text-sm text-gray-600">
              Add process-level inputs or upload evidence.
            </div>
            <div className="mt-3 grid gap-2">
              <label className="text-xs text-gray-500">Smelter energy (kWh/kg)</label>
              <input type="number" className="border p-2 rounded" defaultValue={13.4} />
              <label className="text-xs text-gray-500">Reclaimed content (%)</label>
              <input type="number" className="border p-2 rounded" defaultValue={26} />
              <label className="text-xs text-gray-500">Upload certificate</label>
              <input type="file" className="border p-2 rounded" />
              <div className="flex gap-2 mt-2">
                <button className="flex-1 py-2 bg-indigo-600 text-white rounded">
                  Save
                </button>
                <button
                  onClick={() => setWizardOpen(false)}
                  className="flex-1 py-2 border rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CircularityCockpit;
