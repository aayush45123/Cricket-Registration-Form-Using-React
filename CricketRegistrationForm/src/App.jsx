import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container.jsx";
import Heading from "./components/Heading.jsx";
import InputContainer from "./components/InputContainer.jsx";
import AddDetails from "./components/AddDetails.jsx";
import ResultContainer from "./components/ResultContainer.jsx";

function App() {
  const [userData, setuserData] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const addPlayer = (name, age, email, phone, playingStyle) => {
    const newPlayer = [
      ...userData,
      {
        name: name,
        age: age,
        email: email,
        phone: phone,
        playingStyle: playingStyle,
      },
    ];
    setuserData(newPlayer);
    setShowResult(true);
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(true);

  const [cancellationMessage, setCancellationMessage] = useState("");

  const handleRemoveRegistration = (name) => {
    const updatedList = userData.filter((player) => player.name !== name);
    setuserData(updatedList);
    setCancellationMessage(`Registration cancelled for ${name}`);
    setShowSuccessMessage(false); // hides the success message
  };

  return (
    <>
      <Container>
        <Heading></Heading>
        <InputContainer>
          <AddDetails addPlayer={addPlayer}></AddDetails>
        </InputContainer>
        {showResult && (
          <ResultContainer
            userData={userData}
            handleRemoveRegistration={handleRemoveRegistration}
            cancellationMessage={cancellationMessage}
            showSuccessMessage={showSuccessMessage}
          />
        )}
      </Container>
    </>
  );
}

export default App;
