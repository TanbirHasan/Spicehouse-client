import React from 'react';
import jwt from "../../Image/jwtauth.webp";

const Blog = () => {
    return (
      <div className="px-10 py-10">
          <h1 className='text-3xl my-5 text-center'>Quetions</h1>
        <div>
          <h3>
            <strong>Difference between javascript and node js</strong>
            <p>
              Javascript is a language that runs inside the browser.Browsers
              have a built-in interpreter for Javascript, along with a bunch of
              libraries and a run-time environment for working with web pages.
              All browsers have JavaScript engines that run the JavaScript of
              web pages. Nodejs is an interpreter and environment for javascript
              which includes a bunch of libraries for using javascript as a
              general-purpose programming language, with an emphasis on
              asynchronicity and non-blocking operations. Node actually runs the
              same interpreter as Google Chrome V8 but provides a different set
              of libraries and a different run-time environment.
            </p>
          </h3>
        </div>
        <div className="my-5">
          <h3>
            <strong>Differences between sql and nosql databases</strong>
          </h3>
          <div>
            <div>
              <h3>
                <b>Sql</b>
              </h3>
              <ul>
                <li>Sql database is a relational database</li>
                <li>It is a table based database</li>
                <li>It has fixed databases</li>
                <li>It is vertically scalable</li>
                <li>These database are good for complex queries</li>
              </ul>
            </div>
            <div>
              <h3>
                <b>Nosql</b>
              </h3>
              <ul>
                <li>
                  Is is primarily called non relational or distributed database
                </li>
                <li>It can be document based database</li>
                <li>It can be key value pairs , graph database</li>
                <li>It follows cap</li>
                <li>These database are not good for complex queries</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3>
            <strong>What is the purpose of jwt and how does it work</strong>
          </h3>
          <p>
            JWT or JSON Web Token, is an open standard used to share information
            between two parties securely a client and a server. JWT
            authentication is a token-based stateless authentication mechanism.
            It is popularly used as a client-side-based stateless session, this
            means the server doesnt have to completely rely on a data store
            database to save session information.
            <br />
            <img src={jwt} alt="auth" className="my-5" />
            <b>How does it work?</b>
            <br />
            When it comes to API authentication and server-to-server
            authorization, JSON web token is particularly a useful technology.
            In terms of Single Sign-On it means that a service provider can
            receive trustworthy information from the authentication server.
          </p>
          <ol>
            <li>User sign-in using username and password.</li>
            <li>
          
              The authentication server verifies the credentials and issues a
              JWT signed using a private key.
            </li>
           
          </ol>
        </div>
      </div>
    );
};

export default Blog;