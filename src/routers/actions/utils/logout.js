/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { account } from '../../../lib/appwrite';
/**
 * Logs out the current user by deleting their session and navigates to the login page.
 *
 * @async
 * @function logout
 * @param {Function} navigate - The navigation function to redirect the user after logut.
 * @returns {Promise<void>} - Returns a promise that resolves once the session is deleted and navigation occurs.
 * @throws {Error} If there is an issue deleitng the user session, the error will be logged to the console.
 */

const logout = async (navigate) => {
  try {
    await account.deleteSession('current');
  } catch (err) {
    return console.log(`Error deleting user session: ${err.message}`);
  }

  return navigate('/');
};

export default logout;
