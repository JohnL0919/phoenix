/**
 * @copyright 2024 John Lin
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { Link, useNavigation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/**
 * Custom hooks
 */
import { useToggle } from '../hooks/useToggle.js';
/**
 * Components
 */
import { IconBtn } from './Button.jsx';
import Avatar from './Avatar.jsx';
import Menu from './Menu.jsx';
import MenuItem from './MenuItem.jsx';
import { LinearProgress } from './Progress.jsx';

/**
 * Assets
 */
import { logoLight, logoDark } from '../assets/assets';

const TopAppBar = () => {
  // - useNavigation: Provides navigation state (loading, idle, submitting, etc.)
  const navigation = useNavigation();

  /**
   * Use a custom hook to manage the menu's show state.
   * "showMenu" holds the current state,
   * and 'setShowMenu' is a function to toggle the menu.
   */
  const [showMenu, setShowMenu] = useToggle();
  /**
   * Check if the current navigation state is 'loading' and if there is no form data associated with the navigation.
   * This condition typically signifies a normal page laod,
   * where the page is loading for the first time or is being reloaded without submitting a form.
   */
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <header className='relative flex items-center justify-between h-16 px-4'>
      <div className='flex gap-1 items-cneter'>
        <IconBtn
          icon='menu'
          title='menu'
          className='lg:hidden'
        />

        <Link
          to='/'
          className='min-w-max max-w-max h-[24px] lg:hidden'
        >
          <img
            src={logoLight}
            width={133}
            height={24}
            alt='phoenix logo'
            className='dark:hidden'
          />
          <img
            src={logoDark}
            width={133}
            height={24}
            alt='phoenix logo'
            className='hidden dark:block'
          />
        </Link>
      </div>

      <div className='menu-wrapper'>
        <IconBtn onClick={setShowMenu}>
          <Avatar />
        </IconBtn>

        <Menu classes={showMenu ? 'active' : ''}>
          <MenuItem labelText='Log out' onClick={} />
        </Menu>
      </div>
      <AnimatePresence>{isNormalLoad && <LinearProgress />}</AnimatePresence>
    </header>
  );
};

export default TopAppBar;
