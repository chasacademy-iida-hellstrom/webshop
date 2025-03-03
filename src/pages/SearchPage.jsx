
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar"

const SearchPage = () => {
    const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <SearchBar onClose={() => navigate(-1)}/>
    </div>
  );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
};

export default SearchPage;
