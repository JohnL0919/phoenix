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
  .setProject('674d31fd002fb3e390b6')
  .setEndpoint('https://cloud.appwrite.io/v1');
