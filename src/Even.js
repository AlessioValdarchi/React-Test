export function Even({ data, butt }) {
    return (
        <>

            {

                <h3>
                    EVEN:{" "}
                    {data.map((item, i) => (
                        <li key={item + i}>{item}</li>
                    ))}
                </h3>
            }
        </>
    );
}