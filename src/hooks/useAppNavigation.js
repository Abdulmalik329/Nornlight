import { useNavigate } from "react-router-dom";

export const useAppNavigation = () => {
  const navigate = useNavigate();

  return {
    goToHome: () => navigate("/"),
    goToAbout: () => navigate("/about-company"),
    goToPopular: () => navigate("/popular-products"),
    goToCatalog: () => navigate("/catalog"),
    goToBlog: () => navigate("/blog"),
    goToKatalog: () => navigate("/catalog"),
  };
};
