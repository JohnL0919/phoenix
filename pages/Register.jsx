/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link } from "react-router-dom";

/**
 * Components
 */
import PageTitle from "../src/components/PageTitle";

/**
 * Custom Modules
 */
import { logoLight, logoDark } from "../src/assets/assets.js";

const Register = () => {
  return (
    <>
      <PageTitle title="Create an account" />

      <div className="">
        <div className="">
          <Link>
            <img
              src={logoLight}
              alt="phoenix logo"
              width={133}
              height={24}
              className=""
            />
            <img
              src={logoLight}
              alt="phoenix logo"
              width={133}
              height={24}
              className=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
