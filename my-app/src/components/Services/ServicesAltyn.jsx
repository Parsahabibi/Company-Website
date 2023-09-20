import React from 'react'
import {Grid, Typography} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

const ServicesAltyn = ({image, title, dec, titleItem, items}) => {

    // fixme title : string , dec:string , titleItem: string  , items:[]

    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = '';

    let variantSecond = '';

    if (isXs) {
        variant = 'subtitle1';
        variantSecond = 'subtitle2'
    } else if (isMd) {
        variant = 'h2';
        variantSecond = 'subtitle1'
    }


    return (
        <Grid pt={{xs: '', md: '89px'}}
              style={{backgroundImage: '/assets/images/back.svg', backgroundPosition: 'center'}}>
            <Grid display={'flex'} flexDirection={{xs: 'column', md: 'row-reverse'}} alignItems={'start'}
                  gap={{xs: '', md: '25px'}}
                  justifyContent={{xs: '', md: 'space-between'}} pb={{xs: '', md: '96px'}}>
                <Grid>
                    <Typography pb={{xs: '', md: '16px'}} fontWeight={900} variant={variant}>{title}</Typography>
                    <Typography textAlign={'justify'} variant={'subtitle1'} fontWeight={500}
                                lineHeight={'25px'}>{dec}</Typography>
                </Grid>
                <img src={image} alt={''}/>
            </Grid>
            <Grid display={'flex'} flexDirection={'column'} alignItems={'start'}>
                <Typography pb={{xs:'' , md:'16px'}} variant={variant} fontWeight={900}>{titleItem}</Typography>
                <Grid display={'flex'} flexDirection={'column'} gap={'16px'}>
                    {
                        items.map(
                            item =>
                                <Grid display={'flex'} alignItems={'center'} gap={'5px'}>
                                    <img width={'8px'} height={'8px'} src={'assets/images/dot.svg'} alt={''}/>
                                    <Typography variant={variantSecond} fontWeight={500}>{item}</Typography>
                                </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
export default ServicesAltyn
