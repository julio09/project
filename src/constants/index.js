

export const NavLink = [
    {
        id : 'Lorem',
        Title: 'Lorem'
    },
    {
        id : 'Ipsum',
        Title: 'Ipsum'
    },
    {
        id : 'Dolor',
        Title: 'Dolor'
    },
    {
        id : 'FAQ',
        Title: 'FAQ'
    }
];

export const Blog = [
    {
        id: 1,
        text: 'Nunc velquam justo',
    },
    {
        id: 2,
        text: 'Cras vestibulum turpis proin nec',
    },
    {
        id: 3,
        text: 'Pharetra semper. Pellentesque id',
    },
    {
        id: 4,
        text: 'Risus ut tincidunt purus a adipiscing',
    },
    {
        id: 5,
        text: 'Nulla ornare quam integer ',
    },
]

export const listItems = NavLink.map(nav =>
      <li key={nav.id}>{nav.Title}</li>
    );


    export const BlogItems = Blog.map(blog =>
        <li key={blog.id}>{blog.text}</li>
      );