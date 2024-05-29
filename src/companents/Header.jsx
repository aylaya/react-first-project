
import style from './header.module.css';

const menuLinks = [
  {
      id: 1,
      title: 'About Us',
      path: '/about',
  },
  {
      id: 2,
      title: 'How It Works',
      path: '/how-it-works',
  },
  {
      id: 3,
      title: 'Pricing',
      path: '/pricing',
  },
  {
      id: 4,
      title: 'FAQs',
      path: '/faq',
  },
]
const Header = () => {
  return (
      <header className={`header ${style.header}`}>
          <div className='container'>
              <nav className={`header__nav`}>
                  <div className={`${style.header__left}`}>
                      <a href='#'>
                          <img src='/logo.png' alt='logo' />
                      </a>
                      <ul>
                          {menuLinks.map(link => (
                              <li key={link.id}>
                                  <a href={link.path}>{link.title}</a>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className={`${style.header__right}`}>
                      <button className={`${style.header__action_white}`} type='button'>
                          Login
                      </button>
                      <button className={`${style.header__action}` } type='button'>
                          Sign Up
                      </button>
                  </div>
              </nav>
          </div>
      </header>
  )
}
export default Header