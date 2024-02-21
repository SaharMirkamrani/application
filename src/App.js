import "sahar-chatbot/dist/react-chatbotify.css";
import ChatBot from "sahar-chatbot";

const App = () => {
  return (
    <div className="App">
      <ChatBot position="bottom-right" />{" "}
      {/* Change the position prop to 'bottom-left', 'top-left' or 'top-right'  */}
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2> Hello there! I'm Sahar. </h2>
        <h3>
          {" "}
          This is the interview task for the VideoRepute company for the
          Front-end dev position
        </h3>
        <h4 style={{ color: "green" }}>Instructions:</h4>
        <p>
          Please navigate to the App component (path:src/App.js) and change the
          position prop of the Chatbot to your liking.<br/> Then click on the chatbot
          button and send a text to the chatbot!
        </p>
      </div>
    </div>
  );
};

export default App;
