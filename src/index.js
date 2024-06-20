import app from "./app.js";
import { PORT } from "./config.js";

app.listen(PORT, async () => {
    console.clear()
    console.log(`Server escuchando en el puerto: ${PORT}`);
});
