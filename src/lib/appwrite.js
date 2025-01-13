/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Client, Account, Avatars } from 'appwrite';

/**
 * Initial appwrite client
 */
const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

/**
 * Initial appwrite account
 */
const account = new Account(client);

/**
 * Initial appwrite avatars
 */
const avatars = new Avatars(client);

export { account, avatars };
