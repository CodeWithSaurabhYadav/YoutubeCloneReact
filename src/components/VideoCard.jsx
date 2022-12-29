import React from 'react'
import { link } from 'react'
import { Typography, Card, CardContent, CardMedia} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'


// demo data
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl} from '../utils/constants'
import { Link } from 'react-router-dom'

const VideoCard = ({ video: {id: { videoId }, snippet} }) => {
    return (
        <Card
            sx={{
                width: {
                    xs: '100%',
                    sm: '358px',
                    md: '320px'
                },
                boxShadow: 'none',
                borderRadius: 'none'
            }}
        >
            <Link
                to={videoId ? `/video/${videoId}` : demoChannelUrl}
            >
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '358px',
                            md: '320px'
                        },
                        height: 180,
                    }}
                />
            </Link>
            <CardContent
                sx={{
                    background: '#1e1e1e',
                    height: 65,
                    width: '300px'
                }}
            >
                <Link
                    to={videoId ? `/video/${videoId}` : demoVideoUrl}
                >
                    <Typography
                        variant='subtitle2'
                        fontWeight='bold'
                        color='#fff'
                    >
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>                
                </Link>
                <Link
                    to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
                >
                    <Typography
                        variant='subtitle5'
                        fontWeight='bold'
                        color='#aaa'
                    >
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle 
                            sx={{
                                fontSize: 12,
                                color: '#aaa',
                                ml: "5px"
                            }}
                        />
                    </Typography>                
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard