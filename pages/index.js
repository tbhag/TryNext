import React from 'react'
import { Grid } from '../components/grid' 
function Home() {
    return <React.Fragment>
        <Grid theme="editor" children={[1,2,3,4,5,6,7,8,9]} />
        <Grid columns={3}  children={[1,2,3,4,5,6,7,8,9]} />
        <Grid theme="deth" columns={2} children={[1,2,3,4,5,6,7,8,9,10]} />
    </React.Fragment>
}
  
export default Home