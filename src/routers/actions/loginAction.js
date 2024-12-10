/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { redirect } from 'react-router-dom';

/**
 * Custom Modules
 */
import { Account } from 'appwrite';

/**
 * Handle the login action
 */
const loginAction = async () => {
  // Retrieve the form data from the incoming request
  const formData = await request.formData();

  try {
    // Attempt to create a session using email and password from the form data
    await account.createEmailPasswordSession(
      formData.get('email'),
      formData.get('password'),
    );
    // On successful login, redirect the user to the homepage
    return redirect('/');
  } catch (err) {
    // Return an error response with a error message
    return {
      message: err.message,
    };
  }
};

export default loginAction;
