export function Odd({ data, butt }) {
    return (
        <>
            {
                <h3>
                    ODD:{" "}
                    {data.map((item, i) => (
                        <li key={item + i}>{item}</li>
                    ))}
                </h3>
            }
        </>
    );
}