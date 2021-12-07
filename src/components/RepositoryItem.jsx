export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>3
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>
                Acessar repositório
            </a>
        </li>
    );
}