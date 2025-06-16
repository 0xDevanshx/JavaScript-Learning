async function getData() {
    try {
        const res = await fetch("https://api.github.com/users/0xDevanshx");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        console.log("Always runs");
    }
}
getData()