
export interface RouteType {
    name: string,
    path: string
}

export const Routes: Array<RouteType> = [
    {
        name: 'About Me', 
        path: '/'
    },

    {
        name: 'Projects',
        path: '/projects'
    },

    {
        name: 'Skills', 
        path: '/aptitudes'
    }
]