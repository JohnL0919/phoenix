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
import { Button } from "../src/components/Button.jsx";

/**
 * Custom Modules
 */
import { logoLight, logoDark, banner } from "../src/assets/assets.js";

const Register = () => {
  return (
    <>
      <PageTitle title="Create an account" />

      <div className="custom-class">
        <div className="custom-container">
          <Link to="/" className="custom-link">
            <img
              src={logoLight}
              alt="phoenix logo"
              width={133}
              height={24}
              className="dark:hidden"
            />
            <img
              src={logoDark}
              alt="phoenix logo"
              width={133}
              height={24}
              className="hidden dark:block"
            />
          </Link>

          <div>
            <h2>Create an Account</h2>
            <p>
              Register Today and Gain Access to Powerful Tools that will
              Supercharge Your Ideas.
            </p>

            <Form method="POST">
              <TextField
                type="text"
                name="name"
                label="Full name"
                placeholder="Full name"
                required
                autoFocus
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                required
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                placeholder="Enter Your Password"
                required
              />
              <Button type="submit">Create Account</Button>
            </Form>

            <p>
              Already have an Account? <Link to="/login">Sign in</Link>
            </p>
          </div>

          <p>&copy; 2024 John Lin. All rights reserved.</p>
        </div>

        <div className="">
          <img src={banner} alt="Banner" className="img-cover" />
          <p>Chat with Phoenix to Supercharge Your Ideas.</p>
        </div>
      </div>
    </>
  );
};

export default Register;
