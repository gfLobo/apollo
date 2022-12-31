
// import other components
import { Grid, Typography } from "@mui/material"
// import react package
import PropTypes from 'prop-types'
// HeaderBoxes component



const HeaderBoxes = ({ titles_numbers }) => (
    <Grid container style={{ marginTop: 30 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {titles_numbers.map((title_number, idx) => (
            <>
                <Grid item xs={2} sm={4} md={4} key={idx}>
                    <Typography variant="h6" color={'white'}>{`${title_number.number}`}</Typography>
                    <Typography variant="h6" color={'#0091ff'}>{title_number.title}</Typography >
                </Grid>
            </>

        ))}
    </Grid>
)

HeaderBoxes.propTypes = {
    titles_numbers: PropTypes.array.isRequired
}

export default HeaderBoxes