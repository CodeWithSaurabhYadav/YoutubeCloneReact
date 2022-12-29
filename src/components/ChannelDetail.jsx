import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CardMedia, Typography } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { display, positions } from '@mui/system'

const ChannelDetail = () => {

    const { id } = useParams();

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([])

    // console.log(channelDetail);
    // console.log(videos);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
    }, [id])

    return (
        <Box
            minHeight='95vh'
            sx={{
                background: '#181a1b',
            }}
        >
            <Box
                sx={{
                    borderBottom: '2px solid #fff'
                }}
            >
                <CardMedia
                    image={channelDetail?.brandingSettings?.image?.bannerExternalUrl
                    }
                    sx={{
                        width: '100%',
                        height: '300px',
                        zIndex: '10'
                    }}
                />
                <Box
                    sx={{
                        display: 'flex'
                    }}
                >
                    <ChannelCard
                        channelDetail={channelDetail}
                        flexDirection='row'
                        width='30vw'
                        logo='120px'
                        height='200px'
                    />
                    <Box
                        sx={{
                            padding: '30px',
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}
                    >
                        <Typography 
                            variant='h5'
                            fontWeight='bold'
                        >
                            Description
                        </Typography>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                width: '50vw'
                            }}
                        >
                            {channelDetail?.brandingSettings?.channel?.description}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    display='flex'
                    p={1}
                    sx={{
                        borderTop: '2px solid #eee'
                    }}
                >
                    <Box 
                        sx={{
                            mr: {sm: '100px'}
                        }}
                    />
                    <Videos videos={videos}/>
                </Box>
            </Box>
            <Box>
            </Box>
        </Box>
    )
}

export default ChannelDetail