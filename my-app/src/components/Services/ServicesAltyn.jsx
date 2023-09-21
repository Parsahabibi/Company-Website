import React from 'react'
import {Grid, Typography} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

const ServicesAltyn = ({image, title, dec, titleItem, items, imageMin}) => {

    // fixme title : string , dec:string , titleItem: string  , items:[]

    const theme = useTheme()

    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));


    let variant = 'subtitle1';

    let variantSecond = 'subtitle2';

    if (isXs) {
        variant = 'subtitle1';
        variantSecond = 'subtitle2'
    } else if (isMd) {
        variant = 'h2';
        variantSecond = 'subtitle1'
    }


    return (
        <Grid pt={{md: '89px'}}>
            <Grid position={'absolute'} top={{xs:'215%' , xxs:'195%' , s:'142%' , md:'120%' , lg:'90%'}} o right={0} zIndex={-1}>
                <img width={'100%'} src={'assets/Images/back.svg'} alt={''}/>
            </Grid>
            <Grid display={'flex'} flexDirection={{xs: 'column', md: 'row-reverse'}}
                  alignItems={{xs: 'center', md: 'start'}}
                  gap={{xs: '0px', md: '25px'}}
                  justifyContent={{xs: 'center', md: 'space-between'}} pb={{xs: '', md: '96px'}}>
                <Grid>
                    <Typography pb={{xs: '8px', md: '16px'}} fontWeight={900} variant={variant}>{title}</Typography>
                    <Typography textAlign={'justify'} variant={'subtitle1'} fontWeight={500}
                                lineHeight={'25px'} pb={{xs: '41px', md: '0px'}}>{dec}</Typography>
                </Grid>
                <Grid display={{xs: 'block', md: 'none'}} pb={{xs: '40px', md: '0px'}}>
                    <img width={'100%'} src={imageMin} alt={''}/>
                </Grid>
                <Grid display={{xs: 'none', md: 'block'}} pb={{xs: '40px', md: '0px'}}>
                    <img src={image} alt={''}/>
                </Grid>

            </Grid>
            <Grid display={'flex'} flexDirection={'column'} alignItems={'start'}>
                <Typography pb={{xs: '18px', md: '16px'}} variant={variant} fontWeight={900}>{titleItem}</Typography>
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
