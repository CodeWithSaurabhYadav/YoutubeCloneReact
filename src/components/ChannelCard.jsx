import React from 'react'
import { Link } from 'react-router-dom'
import { Box, CardContent, Typography, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, flexDirection, width, logo, height }) => {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: height ?? '280px',
                width: {
                    xs: '320px',
                    md: width
                }
            }}
        >
            <Link
                to={`/channel/${channelDetail?.id?.channelId}`}
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#FFF',
                        flexDirection: {
                            md: flexDirection,
                            xs: 'column'
                        }
                    }}
                >
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            mb: 2,
                            border: '1px solid #e3e3e3',
                            width: logo ?? '180px',
                            height: logo ?? '180px'
                        }}
                    />
                    <Box
                        sx={{
                            ml: flexDirection === 'row' ? '20px' : 'none',
                        }}
                    >
                        <Typography
                            variant='h6'
                        >
                            {channelDetail?.snippet?.title}
                            <CheckCircle
                                sx={{
                                    fontSize: 16,
                                    color: '#aaa',
                                    ml: "5px"
                                }}
                            />
                        </Typography>
                        {channelDetail?.statistics?.subscriberCount && (
                            <Typography>
                                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                            </Typography>
                        )}
                    </Box>
                </CardContent>
            </Link>
        </Box>
    )
}
export default ChannelCard