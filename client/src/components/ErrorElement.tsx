import { useNavigate } from "react-router-dom";

const ErrorEelement = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-start">
      <p className="font text-[25vw] text-pop">404</p>
      <h1 className="text-5xl text-pop">page doesnt exist</h1>
      <p className="pb-3 text-xl">page doesnt exist</p>

      <button
        onClick={() => navigate(-1)}
        className="rounded bg-primary p-3 text-xl"
      >
        Return
      </button>
    </div>
  );
};
export default ErrorEelement;
