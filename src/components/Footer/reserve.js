<>
  <hr
    style={{
      width: "100%",
      height: "2.5px",
      background: "black",
      margin: "25px 0px",
    }}
  ></hr>
  <div className={style.container}>
    <div className={style.left}>
      <h1>Logo</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={style.socialcontainer}>
        <div className={style.socialicon} style={{ backgroundColor: "blue" }}>
          <AiFillFacebook />
        </div>
        <div className={style.socialicon} style={{ backgroundColor: "blue" }}>
          <AiFillFacebook />
        </div>
        <div className={style.socialicon} style={{ backgroundColor: "blue" }}>
          <AiFillFacebook />
        </div>
      </div>
    </div>
    <div className={style.center}>
      <h3>Links</h3>
      <ul>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
    </div>
    <div className={style.right}>
      <h3>Contact</h3>
      <div className={style.contactitem}>
        <AiFillFacebook /> <span>Lorem ipsum dolor sit amet</span>
      </div>
      <div className={style.contactitem}>
        <AiFillFacebook />
        <span>Lorem ipsum dolor sit amet</span>
      </div>
      <div className={style.contactitem}>
        <AiFillFacebook />
        <span>Lorem ipsum dolor sit amet</span>
      </div>
    </div>
  </div>
</>;
