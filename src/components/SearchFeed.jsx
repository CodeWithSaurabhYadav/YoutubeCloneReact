import React from 'react'

import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos } from './'
import { useParams , useNavigate} from 'react-router-dom'

import { fetchFromAPI } from '../utils/fetchFromAPI'

const SearchFeed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setvideos] = useState([])
    const [check, setCheck] = useState(false)

    const { searchTerm } = useParams()

    const navigate = useNavigate()

    if(searchTerm === ''){
        navigate(`/`)
    }
    
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setvideos(data.items))
        setCheck(true)
    }, [selectedCategory])

    useEffect(() => {
        fetchFromAPI(`search?q=${searchTerm}&part=snippet`).then((data) => setvideos(data.items))
        setCheck(false)
    }, [searchTerm])

    return (
        <Stack
            sx={{
                flexDirection: {
                    sx: 'column',
                    md: 'row'
                }
            }}
        >
            <Box
                sx={{
                    height: {
                        sx: 'auto',
                        md: '92vh'
                    },
                    px: {
                        sx: 0,
                        md: 2
                    }
                }}
            >
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography
                    className="copyright"
                    variant='body2'
                    sx={{
                        mt: 1.5,
                        color: '#fff'
                    }}
                >
                    Copyright 2022 Sauraj
                </Typography>

            </Box>

            <Box
                p={2}
                sx={{
                    overflowY: 'auto',
                    height: '90vh',
                    flex: 2
                }}
            >
                <Typography
                    variant='h4'
                    fontweight='bold'
                    mb={2}
                    sx={{
                        color: "#FFF"
                    }}
                >
                    {check ? selectedCategory : `Search result: ${searchTerm}`}
                    <span
                        style={{
                            color: '#F31503'
                        }}
                    >
                        &nbsp;{check ? 'videos' : ''}
                    </span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default SearchFeed