import { useNavigate } from "react-router-dom";

import { Button } from "antd";

const ButtonBack = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Button type="primary" size="large" onClick={handleClick}>
        Back to games list
      </Button>
    </div>
  );
};

export default ButtonBack;
