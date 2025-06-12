// app/page.tsx
'use client'; // Keep this if you intend to use client-side features like useState

import { useState } from "react";
import Image from 'next/image'; // If you want to use the uploaded image

// You need to define and export a React component here
export default function HomePage() {
  const [count, setCount] = useState(0); // Example of using useState if needed

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#0a1d1d', // A dark green/blue from your image
      color: 'white',
      padding: '2rem'
    }}>
      <h1>Welcome to My AI Chatbot Project!</h1>
      <p>This is the landing page. Let's build something amazing for our planet!</p>

      {/* You can include your environmental image here */}
      <div style={{ marginTop: '2rem' }}>
        {/*
          If the image is in your public folder, e.g., /public/environment-image.png
          Replace '/environment-image.png' with the actual path to your image
        */}
        <Image
          src="/your-environmental-image-name.png" // <--- IMPORTANT: Update this path to where you saved your image in the public folder
          alt="Environmental Tech"
          width={600} // Adjust width as needed
          height={800} // Adjust height as needed
          priority // Optional: loads image with high priority
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          marginTop: '1rem',
          padding: '0.8rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Click Me: {count}
      </button>
    </main>
  );
}