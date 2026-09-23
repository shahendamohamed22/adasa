


export function formatDate(date) {
    const formatedDate = new Date(date).toLocaleDateString("ar-EG", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    return formatedDate;
}