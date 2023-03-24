import React from 'react'
import { Container, Card, CircularProgress, Grid } from "@material-ui/core";
function Loader() {
  return (
    <Container>
        <Grid container direction="row" justify="center" alignItems="center">
          <CircularProgress />
        </Grid>
      </Container>
  )
}

export default Loader
