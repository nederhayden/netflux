import { useEffect, useState } from "react";
import api from "../../services/api";

export const HomeComponent = () => {
  const [repositories, setRepositories] = useState([]);

  async function loadRepositories() {
    let response = await api.get("/repos");
    setRepositories(response.data);

    return;
  }

  useEffect(() => {
    loadRepositories();
  }, []);

  return (
    <div>
      {repositories.length ? (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhum item encontrado</p>
      )}
    </div>
  );
};
