import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
<div className="app-repeat">
  <div className="app-wrap">
    <h1 className="app">
      <header className="app-header">
        <LogoArea></LogoArea>
        <ProfileArea></ProfileArea>
        <MenuButton></MenuButton>
      </header>
    </h1>
    <div className="app-container">
        <TasksArea></TasksArea>
    </div>
    <div className="app-fnb">
      <Fnb></Fnb>
    </div>
  </div>
  <div className="app-wrap">
    <h1 className="app">
      <header className="app-header">
        <LogoArea></LogoArea>
        <ProfileArea></ProfileArea>
        <MenuButton></MenuButton>
      </header>
    </h1>
    <div className="app-container">
        <TasksArea></TasksArea>
    </div>
    <div className="app-fnb">
      <Fnb></Fnb>
    </div>
  </div>
  <div className="app-wrap">
    <h1 className="app">
      <header className="app-header">
        <LogoArea></LogoArea>
        <ProfileArea></ProfileArea>
        <MenuButton></MenuButton>
      </header>
    </h1>
    <div className="app-container">
        <TasksArea></TasksArea>
    </div>
    <div className="app-fnb">
      <Fnb></Fnb>
    </div>
  </div>
  <div className="app-wrap">
    <h1 className="app">
      <header className="app-header">
        <LogoArea></LogoArea>
        <ProfileArea></ProfileArea>
        <MenuButton></MenuButton>
      </header>
    </h1>
    <div className="app-container">
        <TasksArea></TasksArea>
    </div>
    <div className="app-fnb">
      <Fnb></Fnb>
    </div>
  </div>
</div>
  );
}

function LogoArea() {
  return (
    <div className="logo-wrap">
      <div className="logo-area">
        <div className="brand-name__area">
          <div className="brand-name">
            <div className="default-icon__area">
              <i className="default-icon"></i>
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

function ProfileArea() {
  return (
  <div className="profileArea-wrap">
    <div className="profileArea__area">
      <div className="user-text__area">
        <p className="user-text">
          Hi, <span className="user-name__data">JJ.Lee!</span>
        </p>
      </div>
      <div className="user-profile__wrap">
        <div className="user-profile__area">
          <i className="user-profile"></i>
        </div>
      </div>
    </div>
  </div>
  )
}

function MenuButton() {
  return (
  <div className="menuButton-area__wrap">
    <div className="button-wrap">
      <button className="menuButton 1st">
        <a href="#" className="menuButton1"></a>
      </button>
      <button className="menuButton 2nd">
        <a href="#" className="menuButton1"></a>
      </button>
      <button className="menuButton 3rd">
        <a href="#" className="menuButton1"></a>
      </button>
      <button className="menuButton 4th">
        <a href="#" className="menuButton1"></a>
      </button>
    </div>
    <div className="button-text__wrap">
      <p className="button-text"> menu1 </p>
      <p className="button-text"> menu2 </p>
      <p className="button-text"> menu3 </p>
      <p className="button-text"> menu4 </p>
    </div>
  </div>
  )
}

function MenuButton1({ children, variant = "default", onClick }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}

function TasksArea() {
  return (
    <div className="tasksArea-wrap">
      <div className="tasksArea-header">
        <div className="myTasks-area">
          <h3 className="myTasks-txt">My tasks</h3>
        </div>
        <div className="tasksSide-area">
          <button className="toAll">
            <p className="tasksSide-txt">View all</p>
          </button>
        </div>
      </div>
      <div className="tasksArea-lnb">
        <ul className="tasksArea-lnb__list">
          <li className="tasksArea-lnb__list__comp">
            <button className="lnb-button">
              <p className="lnb-txt__active">Weekly</p>
            </button>
          </li>
          <li className="tasksArea-lnb__list__comp">
            <button className="lnb-button">
              <p className="lnb-txt">Upcoming</p>
            </button>
          </li>
          <li className="tasksArea-lnb__list__comp">
            <button className="lnb-button">
              <p className="lnb-txt">Later</p>
            </button>
          </li>
          <li className="tasksArea-lnb__list__comp">
            <button className="lnb-button">
              <p className="lnb-txt">Recently</p>
            </button>
          </li>
        </ul>
      </div>
      <div className="tasksArea-container">
        <ul className="schedule-list">
          <li className="today-schedule 1st">
            <div className="today-schedule__wrap">
              <div className="today-schedule__button">
                <button className="today-schedule__button__st">
                  View all
                </button>
              </div>
              <div className="schedule-name">
                <p className="schedule-name__txt">Today's <br/>Schedule </p>
              </div>
              <div className="schedule-date">
                <p className="schedule-date__txt">19 AUG, 2025</p>
                <p className="schedule-time__txt">09:30 AM</p>
              </div>
            </div>
          </li>
          <li className="today-schedule 2nd">
            <div className="today-schedule__wrap">
              <div className="today-schedule__button">
                <button className="today-schedule__button__st">
                  View all
                </button>
              </div>
              <div className="schedule-name">
                <p className="schedule-name__txt">Today's <br/>Schedule </p>
              </div>
              <div className="schedule-date">
                <p className="schedule-date__txt">19 AUG, 2025</p>
                <p className="schedule-time__txt">09:30 AM</p>
              </div>
            </div>
          </li>
          <li className="today-schedule__cutted">
            <div className="cutted-area">
              <button className="today-schedule__button__st__cutted">
              </button>
              <p className="schedule-name__txt__cutted">To <br/>Sc </p>
            </div>
          </li>
        </ul>
        <div className="schedule-info__wrap">
          <div className="schedule-info__area">
            <div className="schedule-info">
              <p className="schedule-info__nameText">Today's Schdule</p>
              <p className="schedule-info__dateText"> 19 AUG, 2025 09:30 AM</p>
            </div>
            <div className="catalog-icon__area">
              <div className="catalog-icon">
                <button className="catalog-icon__butt">
                <i className="catalog-icon__st"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Fnb() {
  return (
    <div className="fnb-wrap">
      <div className="fnb-area">
        <ul className="fnb-menu__list">
          <li className="fnb-comp">
            <button className="fnb-button">
              <i className="fnb-comp__icon__home"></i>
            </button>
          </li>
          <li className="fnb-comp">
            <button className="fnb-button">
              <i className="fnb-comp__icon__calender"></i>
            </button>
          </li>
          <li className="fnb-comp">
            <button className="fnb-button">
              <i className="fnb-comp__icon__graph"></i>
            </button>
          </li>
          <li className="fnb-comp">
            <button className="fnb-button">
              <i className="fnb-comp__icon__mytab"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}