import React from "react";

const FAQ = () => {
  return (
    <div className="bg-dark h-[92vh] w-[99%] mx-auto rounded-lg p-2 flex items-center justify-around">
      <div className="text-white md:w-[40%] w-[95%]">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-yellow-400 bg-dark rounded-box my-2"
        >
          <div className="collapse-title text-yellow-400 text-xl font-medium">
            What is full stack developer ?
          </div>
          <div className="collapse-content">
            <p>
              A full stack web developer is a person who can develop both client
              and server software. In addition to mastering HTML and CSS, he/she
              also knows how to: Program a browser (like using JavaScript,
              jQuery, Angular, or Vue) Program a server (like using PHP, ASP,
              Python, or Node)
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-yellow-400 bg-dark rounded-box my-2"
        >
          <div className="collapse-title text-yellow-400 text-xl font-medium">
            What are the key features of Python?
          </div>
          <div className="collapse-content">
            <p>
              <li>
                Easy to Code. Python is a very high-level programming language,
                yet it is effortless to learn.
              </li>
              <li>
                Easy to Read. Python code looks like simple English words.
              </li>
              <li>Free and Open-Source.</li>
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-yellow-400 bg-dark rounded-box my-2"
        >
          <div className="collapse-title text-yellow-400 text-xl font-medium">
            How is C# different from C?
          </div>
          <div className="collapse-content">
            <p>
              C : In C language, garbage collection is not. <br />
              C# : While in C#, garbage collection is managed by Common Language
              Runtime (CLR).
            </p>
          </div>
        </div>
      </div>
      <img
        className="hidden md:flex"
        src="https://i.ibb.co/X2s8ytk/faq-removebg-preview.png"
        alt="faq-removebg-preview"
        border="0"
      ></img>
    </div>
  );
};

export default FAQ;
