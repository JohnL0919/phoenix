/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

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
import { CircularProgress, LinearProgress } from '../src/components/Progress';

/**
 * Assets
 */
import { logoLight, logoDark, banner } from '../src/assets/assets.js';

const ResetLink = () => {
  // Get error data from form submission using useActionData (likely from React Router)
  const actionData = useActionData();
  console.log(actionData);
  // Get navigation state e.g. loading/submitting etc
  const navigation = useNavigation();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    // Show snackbar with the provided error message
    if (actionData) {
      showSnackbar({
        message: actionData.message,
        type: actionData.ok ? 'info' : 'error',
        timeOut: 8000,
      });
    }
  }, [actionData, showSnackbar]);

  return (
    <>
      <PageTitle title='Reset password' />

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
                Forgot your password?
              </h2>
              <p className='px-2 mt-1 mb-5 text-center text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                Enter your email, and we&apos;ll send a password reset link.
              </p>

              <Form
                method='POST'
                className='grid grid-cols-1 gap-4'
              >
                <TextField
                  type='email'
                  name='email'
                  label='Email'
                  placeholder='Email'
                  helperText='The verification link will be valid for 1 hour.'
                  required
                  autoFocus={true}
                />

                <Button
                  type='submit'
                  disabled={navigation.state === 'submitting'}
                >
                  {navigation.state === 'submitting' ? (
                    <CircularProgress size='small' />
                  ) : (
                    'Get link'
                  )}
                </Button>
              </Form>
            </div>
          </div>

          <p className='mx-auto mt-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2024 John Lin. All rights reserved.
          </p>
        </div>

        <div className='hidden overflow-hidden rounded-lg lg:block img-box lg:relative'>
          <img
            src={banner}
            alt='Banner'
            className='img-cover w-[1550px] h-[1200px] lg:block'
          />
          <p className='lg:block absolute z-10 font-semibold leading-tight bottom-10 left-12 right-12 text-displayLarge text-right text-light-onSurface drop-shadow-sm text-[72px]'>
            Chat with Phoenix to Supercharge Your Ideas.
          </p>
        </div>
      </div>
      <AnimatePresence>
        {navigation.state === 'loading' && (
          <LinearProgress classes='aboslute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  );
};

export default ResetLink;
