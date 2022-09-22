export function Even({ title, data, onRemove }) {
    return (
        <>

            {

                <h3>
                    {title}:{" "}
                    {data.map((item, i) => (
                        <li key={item + i}>{item} <button onClick={e => onRemove(title, i)}>delete</button></li>
                    ))}
                </h3>
            }
        </>
    );
}