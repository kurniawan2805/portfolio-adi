const Project = (props) => {
  const { title, desc, imgUrl, url } = props;

  return (
    <div className="card">
      <img className="card-img-top" src={imgUrl} alt="Card {title}" />
      <div className="card-body ">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">{desc}</p>
        {url ? (
          <button>
            <a href={url} className="button" target="_blank">
              See Detail
            </a>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Project;
