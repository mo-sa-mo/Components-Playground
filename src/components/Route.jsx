import React from "react";
import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;

// import React from "react";
// import { useContext } from "react";
// import NavigationContext from "../context/navigation";

// function Route({ path, children }) {
//   const { currenPath } = useContext(NavigationContext);

//   if (path === currenPath) {
//     return children;
//   }

//   return null;
// }

// export default Route;
