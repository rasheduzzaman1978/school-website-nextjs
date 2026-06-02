export const getResults = async () => {
    const res = await fetch("http://localhost:8000/results",
        {
            cache: "no-store"
        }
    );
    const data = await res.json();
    return data;
}

export const getResultById = async (resultId) => {
    const res = await fetch(`http://localhost:8000/results/${resultId}`,
        {
            cache: "no-store"
        }
    );
    const data = await res.json();
    return data;
}