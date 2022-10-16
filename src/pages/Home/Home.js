import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchField from "../../components/SearchField";
import { HomeContainer } from "./styles";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/profile?search=${inputText}`);
  };
  return (
    <HomeContainer>
      <SearchField
        onSearch={handleSubmit}
        onChange={({ target }) => setInputText(target.value)}
        inputText={inputText}
      />
    </HomeContainer>
  );
};

export default Home;
