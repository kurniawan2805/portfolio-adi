import "./projects.scss";
import { useEffect, useState } from "react";

import Project from "./Project";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://raw.githubusercontent.com/kurniawan2805/portfolio-react/master/src/components/projects/data.json";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
      // const jsonData = await data.json();
      // return jsonData;
      // console.log(first);
    };
    getData();
  }, []);
  // console.log({ data });
  const dataProject = data.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      desc={project.desc}
      url={project.url}
      imgUrl={project.imgUrl}
    />
  ));
  return (
    <section className="projects">
      <h4 className="text-center">Some works I play with...</h4>
      <div className="container projects-wraper">{dataProject}</div>
    </section>
  );
};
export default Projects;
