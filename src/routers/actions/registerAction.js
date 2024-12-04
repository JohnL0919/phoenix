/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { account } from '../../lib/appwrite';
import generateID from './utils/generateID';

/**
 * Handles user registration
 */
const registerAction = async ({ request }) => {
  // Retrieve the form data from the incoming request
  const formData = await request.formData();
  try {
    // Creates a new user account using the provided email, password, and name
    await account.create(
      generateID(), //Generates a unique ID for the user
      formData.get('email'), //Retrieves email from the form data.
      formData.get('password'), //Retrieves password from the form data.
      formData.get('name'), //Retrieves name from the form data.
    );
  } catch (err) {
    return {
      message: err.message, //Error message from the caught error.
    };
  }
  return null;
};

export default registerAction;
