import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
//   let count = 0;
  const sendMessage = async () => {
    try {
      const apiUrl = 'https://api.openai.com/v1/chat/completions';
      const apiKey = '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';
  
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      };
  
      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
        temperature: 0.7,
      };
  
      const { data } = await axios.post(apiUrl, requestBody, { headers });
      setResponse(data.choices[0].message.content);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error('Rate limit exceeded. Retrying...');
        setTimeout(sendMessage, 2000); // Retry after 2 seconds
      } else {
        console.error('Error sending message:', error);
        setResponse('Error sending message');
      }
    }
  };
  

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;
