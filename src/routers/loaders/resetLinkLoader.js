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
import { account } from '../../lib/appwrite';

const resetLinkLoader = async () => {
  try {
    //Attempt to retrieve the user's account information
    await account.get();
  } catch (err) {
    console.log(`Error getting user session: ${err.message}`);
    return null;
  }

  //If account retrieval is successful, redirect user to the home page ('/')
  return redirect('/');
};

export default resetLinkLoader;
