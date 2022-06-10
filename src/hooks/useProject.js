import { useContext, useEffect } from "react";
import { ProjectContext } from "../App";

const useProject = () => {
  // const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useContext(ProjectContext);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  });
  return [projects, setProjects];
};

export default useProject;
