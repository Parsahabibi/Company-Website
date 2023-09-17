import React, {useEffect, useRef, useState} from 'react'
import {Grid, Typography, useTheme} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {styled, keyframes} from '@mui/system';



const MobileHeader = ({id}) => {


    const [open, setOpen] = useState(false)

    const [closing, setClosing] = useState(false);


    const fadeIn = keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `;

    const fadeOut = keyframes`
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    `;


    const AnimatedGrid = styled(Grid)(({theme, isClosing}) => ({
        animation: isClosing ? `${fadeOut} 0.25s forwards` : `${fadeIn} 0.25s`,
        borderColor: theme.palette.primary.one,
    }));


    const theme = useTheme();


    const menuRef = useRef(null);


    const variable = [
        {id: 1, title: 'صفحه اصلی'},
        {id: 2, title: 'خدمات'},
        {id: 3, title: 'استعلام قیمت'},
        {id: 4, title: 'اخبار'},
        {id: 5, title: 'درباره ما'},
        {id: 6, title: 'تماس با ما'},
    ]


    const handleClickOutside = event => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setClosing(true);
            setTimeout(() => {
                setOpen(false);
                setClosing(false);
            }, 500);
        }
    };


    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });


    return (
        <Grid position={'fixed'} top={0} left={0} right={0} zIndex={10}  bgcolor={theme.palette.primary.one} py={'21px'} px={'16px'} display={'flex'} alignItems={'center'}
              justifyContent={'space-between'}>
            <Grid>
                <MenuIcon fontSize={'large'} style={{position: 'relative', top: 0, right: 0}} onClick={() => {
                    setClosing(false);
                    setOpen(true);

                }}/>
                {
                    open === true ?
                        <AnimatedGrid
                            position={'absolute'}
                            style={{boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.25)'}}
                            borderRadius={'0 0 0 20px'}
                            top={32}
                            right={18}
                            zIndex={10}
                            ref={menuRef}
                            bgcolor={theme.palette.primary.one}
                            border={'none'}
                            isClosing={closing}
                            p={'24px 32px 16px 32px'}
                        >
                            {
                                variable.map(
                                    item =>
                                        <Grid key={item.id} >
                                            {
                                                item.id === 6 ?
                                                    item.id === id ?
                                                        <Typography color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                    justifyContent={'center'} py={'8px'}
                                                                    variant={'subtitle1'}
                                                                    fontWeight={900}>{item.title}</Typography> :
                                                        <Typography color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                    justifyContent={'center'} py={'8px'}
                                                                    variant={'subtitle1'}
                                                                    fontWeight={500}>{item.title}</Typography>
                                                    :
                                                    item.id === id ?
                                                        <>
                                                            <Typography color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                        justifyContent={'center'} py={'8px'}
                                                                        variant={'subtitle1'}
                                                                        fontWeight={900}>{item.title}</Typography>
                                                            <Grid  bgcolor={'rgba(68, 74, 93, 0.50)'} width={'100%'}
                                                                  height={'1px'}></Grid>
                                                        </>
                                                        :
                                                        <>
                                                            <Typography color={theme.palette.secondary.one} px={'30px'} display={'flex'} alignItems={'center'}
                                                                        justifyContent={'center'} py={'8px'}
                                                                        variant={'subtitle1'}
                                                                        fontWeight={500}>{item.title}</Typography>
                                                            <Grid  bgcolor={'rgba(68, 74, 93, 0.50)'} width={'100%'}
                                                                  height={'1px'}></Grid>
                                                        </>
                                            }

                                        </Grid>
                                )
                            }
                        </AnimatedGrid>
                        :
                        <></>
                }
            </Grid>
            <Grid>
                <img src={'assets/images/Altyn.svg'}/>
            </Grid>
        </Grid>
    )
}
export default MobileHeader
