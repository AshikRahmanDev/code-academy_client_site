import React from "react";

const Blog = () => {
  return (
    <div className="bg-dark md:h-[92vh] h-[92vh] w-[99%] mx-auto rounded-lg p-3 pl-5">
      <h1 className="text-white text-2xl font-bold normal-case">
        Recent Blogs
      </h1>

      <div className="text-white border-2 border-yellow-500 p-3 my-2">
        <h4 className="text-xl">what is cors?</h4>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>
      <div className="text-white border-2 border-yellow-500 p-3 my-2">
        <h4 className="text-xl">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          Main reason for using firebase is Firebase can be used when you do not
          want to spend a lot of time developing your own backend. It can be
          used for rapid development.
          <br />
          Other authentication Options:
          <li>MongoDb</li>
          <li>Oracle Database</li>
          <li>Amazon Redshift</li>
        </p>
      </div>
      <div className="text-white border-2 border-yellow-500 p-3 my-2">
        <h4 className="text-xl">How does the private route work?</h4>
        <p>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
      </div>
      <div className="text-white border-2 border-yellow-500 p-3 my-2">
        <h4 className="text-xl">What is Node? How does Node work?</h4>
        <p>
          Node allows developers to write JavaScript code that runs directly in
          a computer process itself instead of in a browser. <br />
          It is a used as backend service where javascript works on the
          server-side of the application.{" "}
          <b>
            Node. js runs on chrome v8 engine which converts javascript code
            into machine code
          </b>
        </p>
      </div>
    </div>
  );
};

export default Blog;
