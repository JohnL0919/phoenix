/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { account } from '../../lib/appwrite';

/**
 * Handles user registration
 */
const registerAction = async ({ request }) => {
  // Retrieve the form data from the incoming request
  const formData = await request.formData();
  try {
    // Creates a new user account using the provided email, password, and name
    await account.create();
  } catch (err) {}
  return null;
};

export default registerAction;
