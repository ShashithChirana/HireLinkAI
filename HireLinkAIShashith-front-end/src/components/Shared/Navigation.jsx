import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Navigation() {
  return (
    <section className="shadow-lg shadow-gray-900 border-white hero">
    <nav className="flex py-7 justify-between items-center ml-9 mr-9 ">
      <div>
        <Link to={"/"} className="text-4xl font-medium text-underlay-1">
        HireLinkAI 
        </Link>
      </div>
      <div className="flex justify-center gap-x-8 items-center">
        <Link to={"/"}>Home</Link>
        <div className="flex gap-x-4 items-center">
          <Link to={"/sign-in"}>Sign In</Link>
          <Button asChild>
            <Link to={"/sign-up"}>Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
    </section>
  );
}

export default Navigation;
