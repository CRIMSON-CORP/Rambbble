interface NavLinksListModel {
    path: string;
    title: string;
}

const NavLinksList: NavLinksListModel[] = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/our-story',
        title: 'Our Story',
    },
    {
        path: '/about',
        title: 'About',
    },
    {
        path: '/faqs',
        title: 'FAQs',
    },
    {
        path: '/contact-us',
        title: 'Contact us',
    },
];

export default NavLinksList;
