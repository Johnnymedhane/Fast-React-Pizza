import { useSelector } from "react-redux";

function Username() {
  const userName = useSelector((state) => state.user.username);
  return <div className="text-sm font-semibold hidden md:block"> {userName} </div>;
}

export default Username;
