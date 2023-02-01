import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from 'scenes/navbar'
import AdvertWidget from 'scenes/widgets/AdvertWidget'
import FriendsList from 'scenes/widgets/FriendsListWidget'
import MyPostWidget from 'scenes/widgets/MyPostWidget'
import PostsWidget from 'scenes/widgets/PostsWidget'
import UserWidget from 'scenes/widgets/UserWidget'

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1100px')
  const { _id, picturePath } = useSelector((state) => state.user)
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="7rem 6% 2rem 6%"
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
          <Box m="2rem 0" />
          <FriendsList userId={_id} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage
