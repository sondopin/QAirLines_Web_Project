import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Error({ message }: { message: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [navigate]);

  return <div>Error because {message}</div>;
}
