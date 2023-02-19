import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
//import Navbar from "./components/Navigation";


function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "How I can help you?"
  }]);

  async function handleSubmit(e){
    e.preventDefaul();
    setChatLog([...chatLog,{user: "me", message: `${input}
    `} ])
    setInput("");
    //fetch response to te api combining the chat log array of messages and sending it as a message to localhost:3000 as a post
    const response = await fetch("http://localhost:3080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        message: chatLog.map((message) => message.message).join("")
      })
    });
  const data = await response.json();
  console.log(data);
  }

  return (
    <div className="App">
    
    {/* <body>

    <h1>      
      <div className="info-menu-button">
      <span>+</span>
        Project info
      </div>
    </h1>

        <h1>      
      <div className="info-menu-button">
      <span>+</span>
        Project info
      </div>
    </h1>

    
    <p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

    <aside>
      <h4>Epcot Center</h4>
      <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </aside>

    </body> */}
    <aside className="sidemenu">
      <div className="side-menu-button">
      <span>+</span>
        New Chat
      </div>
    </aside>
    {/* <aside className="infomenu">
      <div className="info-menu-button">
      <span>+</span>
        Project info
      </div>
    </aside>
    <aside className="infomenu">
      <div className="info-menu-button">
      <span>+</span>
        Random
      </div>
    </aside>    
    <aside>
      <p>The Epcot center is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </aside> */}
    <section className="chatbox">
    <div className="chat-log">
      {chatLog.map((message, index) => (
        <ChatMessage key={index} message={message} />    
      ))}
      <div className="chat-message chatgpt">
        <div className="chat-message-center">
          <div className='avatar chatgpt'>
            
          </div>
          <div className='message'>
            I am an AI
          </div>
        </div>
      </div>
    </div>
      <div className="chat-input-holder">
      <form onSubmit={handleSubmit}>
        <input 
        rows='1' 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="chat-input-textarea"></input>
      </form>
      </div>
    </section>
    </div>
  );
}

const ChatMessage = ({message}) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
    <div className="chat-message-center">
      <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
        {message.user === "gpt" && <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"> 
        <path d="M95.5506 41.8495V36.8495H77.6805V33.4496H80.8705C84.6405 33.4496 87.7106 30.3795 87.7106 26.6095C87.7106 25.5995 88.5406 24.7695 89.5506 24.7695H95.5506V19.7695H89.5506C85.7806 19.7695 82.7106 22.8395 82.7106 26.6095C82.7106 27.6195 81.8805 28.4496 80.8705 28.4496H77.6805V18.1396H67.3805V14.9496C67.3805 13.9396 68.2105 13.1095 69.2206 13.1095C72.9905 13.1095 76.0605 10.0395 76.0605 6.26953V0.269531H71.0605V6.26953C71.0605 7.27953 70.2306 8.10953 69.2206 8.10953C65.4506 8.10953 62.3805 11.1796 62.3805 14.9496V18.1396H58.9705V0.269531H53.9705V18.1396H50.5605V0.269531H45.5605V18.1396H42.1505V0.269531H37.1505V18.1396H33.7405V14.9496C33.7405 11.1796 30.6705 8.10953 26.9005 8.10953C25.8905 8.10953 25.0605 7.27953 25.0605 6.26953V0.269531H20.0605V6.26953C20.0605 10.0395 23.1305 13.1095 26.9005 13.1095C27.9105 13.1095 28.7405 13.9396 28.7405 14.9496V18.1396H18.4405V28.4496H15.2405C14.2305 28.4496 13.4005 27.6195 13.4005 26.6095C13.4005 22.8395 10.3305 19.7695 6.56055 19.7695H0.560547V24.7695H6.56055C7.57055 24.7695 8.40055 25.5995 8.40055 26.6095C8.40055 30.3795 11.4705 33.4496 15.2405 33.4496H18.4405V36.8495H0.570545V41.8495H18.4405V45.2495H0.570545V50.2495H18.4405V53.6495H0.570545V58.6495H18.4405V62.0495H15.2405C11.4705 62.0495 8.40055 65.1196 8.40055 68.8896C8.40055 69.8996 7.57055 70.7295 6.56055 70.7295H0.560547V75.7295H6.56055C10.3305 75.7295 13.4005 72.6596 13.4005 68.8896C13.4005 67.8796 14.2305 67.0495 15.2405 67.0495H18.4405V77.3595H28.7405V80.5495C28.7405 81.5595 27.9105 82.3896 26.9005 82.3896C23.1305 82.3896 20.0605 85.4595 20.0605 89.2295V95.2295H25.0605V89.2295C25.0605 88.2195 25.8905 87.3896 26.9005 87.3896C30.6705 87.3896 33.7405 84.3195 33.7405 80.5495V77.3595H37.1505V95.2295H42.1505V77.3595H45.5605V95.2295H50.5605V77.3595H53.9705V95.2295H58.9705V77.3595H62.3805V80.5495C62.3805 84.3195 65.4506 87.3896 69.2206 87.3896C70.2306 87.3896 71.0605 88.2195 71.0605 89.2295V95.2295H76.0605V89.2295C76.0605 85.4595 72.9905 82.3896 69.2206 82.3896C68.2105 82.3896 67.3805 81.5595 67.3805 80.5495V77.3595H77.6805V67.0495H80.8705C81.8805 67.0495 82.7106 67.8796 82.7106 68.8896C82.7106 72.6596 85.7806 75.7295 89.5506 75.7295H95.5506V70.7295H89.5506C88.5406 70.7295 87.7106 69.8996 87.7106 68.8896C87.7106 65.1196 84.6405 62.0495 80.8705 62.0495H77.6805V58.6495H95.5506V53.6495H77.6805V50.2495H95.5506V45.2495H77.6805V41.8495H95.5506ZM72.6705 23.1396V28.4496H67.3705V23.1396H72.6705ZM23.4405 23.1396H28.7405V28.4496H23.4405V23.1396ZM23.4405 72.3695V67.0595H28.7405V72.3695H23.4405ZM72.6705 72.3695H67.3705V67.0595H72.6705V72.3695ZM67.3306 62.0595V67.0296H62.3705V72.3695H33.7405V67.0296H28.7805V62.0595H23.4505V33.4496H28.7805V28.4796H33.7405V23.1396H62.3705V28.4796H67.3306V33.4496H72.6705V62.0595H67.3306Z" /> 
        <path d="M57.2405 38.5595H38.8605V56.9395H57.2405V38.5595Z" /> </svg> 
      }
      </div>
      <div className='message'>
        {message.message}
      </div>
    </div>
  </div>
  ) 
} 

export default App;

