import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const images = import.meta.glob("../../public/images/*");
console.log(images);

function Images() {
    return (
        <>
            <Grid container></Grid>
        </>
    );
}

export default Images;
