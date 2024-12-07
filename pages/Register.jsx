/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * Custom hooks
 */
import { useSnackbar } from '../src/hooks/useSnackbar.js';

/**
 * Components
 */
import PageTitle from '../src/components/PageTitle';
import TextField from '../src/components/TextField.jsx';
import { Button } from '../src/components/Button.jsx';
import { CircularProgress } from '../src/components/Progress';

/**
 * Assets
 */
import { logoLight, logoDark, banner } from '../src/assets/assets.js';
import { use } from 'framer-motion/client';

const Register = () => {
  // Get error data from form submission using useActionData (likely from React Router)
  const error = useActionData();
  console.log(error);
  // Get navigation state e.g. loading/submitting etc
  const navigation = useNavigation();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    // Show snackbar with the provided error message
    if (error?.message) {
      showSnackbar({
        message: error.message,
        type: 'error',
      });
    }
  }, [error, showSnackbar]);

  return (
    <>
      <PageTitle title='Create an account' />

      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Link
            to='/'
            className='mx-auto mb-auto max-w-max lg:mx-0'
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

              <Form
                method='POST'
                className='grid grid-cols-1 gap-4'
              >
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
                <Button
                  type='submit'
                  disabled={navigation.state === 'submitting'}
                >
                  {navigation.state === 'submitting' ? (
                    <CircularProgress size='small' />
                  ) : (
                    'Create account'
                  )}
                </Button>
              </Form>

              <p className='mt-4 text-center text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                Already have an Account?{' '}
                <Link
                  to='/login'
                  className='inline-block link ms-1 text-light-onSurface dark:text-dark-onSurface'
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <p className='mx-auto mt-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2024 John Lin. All rights reserved.
          </p>
        </div>

        <div className='hidden overflow-hidden rounded-lg lg:block lg:relative img-box'>
          <img
            src={banner}
            alt='Banner'
            className='img-cover w-[1250px] h-[1000px]'
          />
          <p className='absolute z-10 font-semibold leading-tight bottom-10 left-12 right-12 text-displayLarge text-right text-light-onSurface drop-shadow-sm 2xl: text-[72px]'>
            Chat with Phoenix to Supercharge Your Ideas.
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
