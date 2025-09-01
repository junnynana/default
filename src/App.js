import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
  <div className="app-wrap">
    <h1 className="app">
      <header className="app-header">
        <logoArea/>
        <profileArea/>
        <menuButton/>
        <menuButton/>
        <menuButton/>
        <menuButton/>
      </header>
    </h1>
    <body className="app-container">
        <tasksArea/>
    </body>
  </div>
  );
}

function logoArea() {
  return (
    <div className="logo-wrap">
      <div className="logo-area">
        <div className="brand-name__area">
          <div className="brand-name">
            <div className="default-icon__area">
              <i className="default-icon"/>
            </div>
            <div className="default-brand__name__area">
              <div className="default-brand__name">
                COMPANY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function profileArea() {
  return (
  <div className="profileArea-wrap">
    <div className="profileArea__area">
      <div className="user-text__area">
        <p className="user-text">
          Hi, <span className="user-name__data">JJ.Lee!</span>
        </p>
      </div>
      <div className="user-profile__area">
        <div className="user-profile__area">
          <i className="user-profile"/>
        </div>
      </div>
    </div>
  </div>
  )
}

function menuButton() {
  return (
    <div className="menuButton-wrap">
      <button className="menuButton">
        <a href="#" class="menuButton">.</a>
      </button>
    </div>
  )
}

function menuButton1({ children, variant = "default", onClick }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}

function tasksArea() {
  return (
    <div className="tasksArea-wrap">
    </div>
  )
}