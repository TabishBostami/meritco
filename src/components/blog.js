import React from 'react'
import './blog.css'

export default function Blog() {
  return (
    <>
      <div className="blogoverall">
        <center>
          <h1>Blog and insight</h1>
        </center>
        <div className="bloghead">
          <div className="blogcard">
            <img
              src="https://img-qn.51miz.com/preview/photo/00/01/52/44/P-1524494-74D37636O.jpg"
              alt=""
              width={260}
            ></img>
            <h3>TEACHING</h3>
            <p>
              The profession of those who give
              <br /> instruction, especially in an elementary <br />
              school or a secondary school or in a <br />
              university. Measured in terms of its members,
              <br /> teaching is the world’s
            </p>
            <h3>LEARN MORE</h3>
          </div>
          <div className="blogcard">
            <img
              src="https://www.cns-partners.com/hubfs/IT-System-Blog-Images/Slide1.jpg"
              alt=""
              width={260}
            ></img>
            <h3>TEACHING</h3>
            <p>
              The profession of those who give
              <br /> instruction, especially in an elementary <br />
              school or a secondary school or in a <br />
              university. Measured in terms of its members,
              <br /> teaching is the world’s
            </p>
            <h3>LEARN MORE</h3>
          </div>
          <div className="blogcard">
            <img
              src="https://internationalteacherstraining.com/blog/wp-content/uploads/2018/08/171219-teacher-stock.jpg"
              alt=""
              width={260}
            ></img>{" "}
            <h3>TEACHING</h3>
            <p>
              The profession of those who give
              <br /> instruction, especially in an elementary <br />
              school or a secondary school or in a <br />
              university. Measured in terms of its members,
              <br /> teaching is the world’s
            </p>
            <h3>LEARN MORE</h3>
          </div>
        </div>
      </div>
      <div className="inputhead">
        <center>
          <h2>Regular news letter</h2>
          <p>some thing inths</p>
          <p>some thing inths</p>
          <input placeholder="Enter your mail" className="inputsize"></input>
          <button className="inputbtn">submit</button>{" "}
        </center>
      </div>
    </>
    )
}
