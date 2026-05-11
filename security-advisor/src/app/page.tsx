import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <header className="border-b border-gray-800 px-6 py-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-semibold text-gray-100">Security Advisor</h1>
          <p className="text-sm text-gray-400 mt-0.5">Senior security architect · threat modeling · architecture review · vulnerability assessment</p>
        </div>
      </header>
      <div className="flex-1 overflow-hidden">
        <ChatInterface />
      </div>
    </main>
  );
}
