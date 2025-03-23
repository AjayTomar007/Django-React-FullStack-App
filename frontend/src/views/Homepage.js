import React from 'react'

function Homepage() {
  return (
    <div>
      <>
  <main role="madin" style={{ marginTop: 50 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Welcome To Chat App</h1>
        <p>
        ChatApp with To-Do Notes is a simple and intuitive platform that combines seamless messaging with task management. Stay connected with your team or friends while keeping track of important to-dos, all in one place. Enjoy a clean interface, real-time updates, and organized task tracking to boost productivity and collaboration. Perfect for personal use, teams, or casual project management — start chatting and getting things done effortlessly!
        </p>
        <p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more »
          </a>
        </p>
      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
      <div className="row">
        <div className="col-md-4">
          <h2>To-Do</h2>
          <p>
          To-Do Notes is a simple and efficient task management app designed to help you stay organized and productive. Easily create, update, and track your tasks with a clean and intuitive interface. Whether it’s managing daily chores, planning projects, or keeping personal reminders, To-Do Notes makes it easy to stay on top of everything. Keep your notes organized, prioritize what matters most, and never miss a task again!
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a> */}
          </p>
        </div>
        <div className="col-md-4">
          <h2>ChatApp</h2>
          <p>
          ChatApp is a simple and reliable messaging platform that keeps you connected with friends, family, or teams. Enjoy seamless communication with real-time messaging, a clean interface, and easy access across devices. Whether you’re having casual conversations or coordinating projects, ChatApp makes staying in touch effortless and enjoyable.
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a> */}
          </p>
        </div>
        <div className="col-md-4">
          <h2>Search</h2>
          <p>
          ChatApp Search makes finding messages quick and effortless. Easily search through conversations to locate important messages, links, or shared files without endless scrolling. With a fast and intuitive search experience, you can stay organized and access the information you need in seconds.
          </p>
          <p>
            {/* <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a> */}
          </p>
        </div>
      </div>
      <hr />
    </div>{" "}
    {/* /container */}
  </main>
  <footer className="container">
    <p>© Company 2017-2018</p>
  </footer>
</>

    </div>
  )
}

export default Homepage