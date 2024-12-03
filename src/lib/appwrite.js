/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Client, Account } from 'appwrite';

/**
 * Initial appwrite client
 */
const client = new Client();
client
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  .setEndpoint('https://cloud.appwrite.io/v1');

/**
 * Initial appwrite account
 */
const accounts = new Account(client);
