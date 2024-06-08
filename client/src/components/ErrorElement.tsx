import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const ErrorElement = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <Button onClick={handleGoHome} color="failure" className="mx-auto mt-6">
          Return
        </Button>
      </div>
    </div>
  );
};

export default ErrorElement;
