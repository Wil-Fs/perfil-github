import { useEffect, useState } from "react";

import styles from "./Repos.module.css";

const ReposList = ({ userName }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${userName}/repos`) // requisição de repositórios do github
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setRepos(resJson);
                    setLoading(false);
                }, 3000);
            })
    }, [userName])
        console.log(repos)
    return (
        <>
            {
                repos.message === "Not Found" ? 
                (
                    <h1>Erro de requisição, digite um usuário valido!</h1>
                ) :
                <div className="container">
            {
                loading ? <h3>Loading...</h3> :
                    (
                        <ul className={styles.list}>
                            {repos.map(({ id, name, language, html_url }) => ( //retorno de repositórios com propiedades filtradas
                                <li className={styles.listItem} key={id} >
                                    <div className={styles.itemName}>
                                        <b>Nome:</b>
                                        {name}
                                    </div>
                                    <div className={styles.itemLanguage}>
                                        <b>Linguagem:</b>
                                        {language}
                                    </div>
                                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no github</a>
                                </li>
                            ))}
                        </ul>
                    )
            }
        </div>
            }
        </>
    )
}

export default ReposList;