/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Components
 */
import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';

const App = () => {
  return (
    <>
      {/*Meta title*/}
      <PageTitle title='PHoenix - chat to supercharge your ideas' />

      <div className=''>
        {/* Sidebar */}

        <div className=''>
          {/*Top app bar */}
          <TopAppBar />

          {/* Main content */}
          <div className=''>
            <div className=''>
              <div className=''></div>
            </div>

            {/* Prompt field */}
            <div className=''>
              <p className=''>
                Phoenix may occasionally provide inaccurate information,
                including details about individuals. Please verify all responses
                for accuracy.
                <a
                  href='https://support.google.com/gemini?p=privacy_notice'
                  target='_blank'
                  className=''
                >
                  Your privacy & Gemini Apps
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
