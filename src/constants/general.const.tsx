import { TSidebarLinks } from '@/types/general.types';
import {
  IconBuilding,
  IconDashboard,
  IconMessage,
  IconPerson,
  IconProfile,
  IconStar,
} from '@/components/icons';

export const sidebarLinks: TSidebarLinks[] = [
  {
    title: 'Dashboard',
    icon: <IconDashboard />,
    path: '/',
  },
  {
    title: 'Property',
    icon: <IconBuilding />,
    path: '/properties',
  },
  {
    title: 'Agent',
    icon: <IconPerson />,
    path: '/agent',
  },
  {
    title: 'Review',
    icon: <IconStar />,
    path: '/review',
  },
  {
    title: 'Message',
    icon: <IconMessage />,
    path: '/message',
  },
  {
    title: 'My Profile',
    icon: <IconProfile />,
    path: '/my-profile',
  },
];
