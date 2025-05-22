
import React from 'react';
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

const FloatingWhatsAppButton = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="919110939727" // Replace with your WhatsApp number in international format
        accountName="Makeup By Anchala" // Name displayed in the chat
        initialMessageByClient="Hello! I saw your makeup portfolio and would like to book an appointment."
        statusMessage="Typically replies within an hour"
        startChatText="Chat with us!"
        tooltipText="Click to chat!"
        allowEsc={true} // Allows closing the chat popup with the Esc key
      />
    </div>
  );
};

export default FloatingWhatsAppButton;