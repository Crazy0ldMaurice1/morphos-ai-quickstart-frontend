'use client';

import { useState } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:5000';

export default function Page() {
  const [messages, setMessages] = useState<{ id: number; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const fetchMessages = async () => {
    const res = await fetch(`${API_BASE_URL}/api/messages`);
    const data = await res.json();
    setMessages(data);
  };

  const handleSubmit = async () => {
    setSubmitStatus(null);
    const res = await fetch(`${API_BASE_URL}/api/echo`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    });

    if (res.ok) {
      setSubmitStatus('Message saved successfully!');
      setInput('');
      fetchMessages();
    } else {
      setSubmitStatus('Failed to save message.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Morphos Quickstart Interactive Test Page</h1>
      <h2>Send a New Message</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button onClick={handleSubmit} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        Submit
      </button>
      {submitStatus && <p>{submitStatus}</p>}

      <h2>Messages from API</h2>
      <button onClick={fetchMessages} style={{ marginBottom: '1rem' }}>
        Load Messages
      </button>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.id}: {msg.content}</li>
        ))}
      </ul>
    </div>
  );
}