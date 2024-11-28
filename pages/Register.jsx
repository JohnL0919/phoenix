/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link, Form } from 'react-router-dom';

/**
 * Components
 */
import PageTitle from '../src/components/PageTitle';
import TextField from '../src/components/TextField.jsx';
import { Button } from '../src/components/Button.jsx';

/**
 * Custom Modules
 */
import { logoLight, logoDark, banner } from '../src/assets/assets.js';

const Register = () => {
  return (
    <>
      <PageTitle title='Create an account' />

      <div className='custom-class'>
        <div className='custom-container'>
          <Link
            to='/'
            className='custom-link'
          >
            <img
              src={logoLight}
              alt='phoenix logo'
              width={133}
              height={24}
              className='mx-auto light-visible max-w-max lg:mx-0'
            />
            <img
              src={logoDark}
              alt='phoenix logo'
              width={133}
              height={24}
              className='mx-auto dark-visible max-w-max lg:mx-0'
            />
          </Link>
          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <div className=''>
              <h2 className='font-semibold text-center text-displaySmall text-light-onBackground dark:text-dark-onBackground'>
                Create an Account
              </h2>
              <p className='px-2 mt-1 mb-5 text-center text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                Register Today and Gain Access to Powerful Tools that will
                Supercharge Your Ideas.
              </p>

              <Form method='POST'>
                <TextField
                  type='text'
                  name='name'
                  label='Full name'
                  placeholder='Full name'
                  required
                  autoFocus
                />
                <TextField
                  type='email'
                  name='email'
                  label='Email'
                  placeholder='Email'
                  required
                />
                <TextField
                  type='password'
                  name='password'
                  label='Password'
                  placeholder='Enter Your Password'
                  required
                />
                <Button type='submit'>Create Account</Button>
              </Form>

              <p>
                Already have an Account? <Link to='/login'>Sign in</Link>
              </p>
            </div>
          </div>

          <p>&copy; 2024 John Lin. All rights reserved.</p>
        </div>

        <div className=''>
          <img
            src={banner}
            alt='Banner'
            className='img-cover'
          />
          <p>Chat with Phoenix to Supercharge Your Ideas.</p>
        </div>
      </div>
    </>
  );
};

export default Register;
