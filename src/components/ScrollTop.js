import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const { pathname } = useLocation(); //useLocation hook return current location object which is destructured to get pathname

  useEffect(() => {
    window.scrollTo(0, 0); //scroll to top of the page
  }, [pathname]); //return null as we don't want to render anything
}

export default ScrollTop;
