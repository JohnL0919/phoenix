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
  console.log(formData.get('name'));
  console.log(formData.get('email'));
  console.log(formData.get('password'));
  return null;
};

export default registerAction;
