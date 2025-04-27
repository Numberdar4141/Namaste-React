import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h1>{err.status}</h1>
    </div>
  );
};
export default Error;
