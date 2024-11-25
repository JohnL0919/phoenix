/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link, Form } from "react-router-dom";

/**
 * Components
 */
import PageTitle from "../src/components/PageTitle";
import TextField from "../src/components/TextField.jsx";

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
          <div className="">
            <h2 className="">Create an Account</h2>

            <p className="">
              Register Today and Gain Access to Powerful Tools that will
              Supercharge Your Ideas.
            </p>

            <Form method="POST" className=""></Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
