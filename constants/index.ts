import { MdHome } from 'react-icons/md'
import { GrHomeRounded } from 'react-icons/gr'
import { FaRegUser, FaUser } from 'react-icons/fa'
import { HiCollection, HiOutlineCollection } from 'react-icons/hi'
import { PiUsersThreeFill, PiUsersThreeLight } from 'react-icons/pi'
import { BsPatchQuestionFill, BsPatchQuestion } from 'react-icons/bs'

export const sidebarLinks = [
	{
		icon: GrHomeRounded,
		active: MdHome,
		route: '/',
		label: 'Home',
	},
	{
		icon: PiUsersThreeLight,
		active: PiUsersThreeFill,
		route: '/community',
		label: 'Community',
	},
	{
		icon: HiOutlineCollection,
		active: HiCollection,
		route: '/collection',
		label: 'Collection',
	},
	{
		icon: FaRegUser,
		active: FaUser,
		route: '/profile',
		label: 'Profile',
	},
	{
		icon: BsPatchQuestion,
		active: BsPatchQuestionFill,
		route: '/askQuestion',
		label: 'Ask a question',
	},
]
