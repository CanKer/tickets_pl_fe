export const mockedData = {
    events: [
        {
            name: 'Lenny Kravitz',
            slug: 'lenny-kravitz',
            image: 'lenny-kravitz.jpg',
            city: 'Kraków, Warszawa',
            date: '28.07.2024 - 29.07.2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus at nunc euismod finibus. Ut ut eleifend eros. In ut ligula diam. Vestibulum sollicitudin, lectus quis tincidunt volutpat, tortor odio bibendum magna, quis egestas est metus at quam. Pellentesque consequat non metus vehicula blandit. Nam vitae faucibus enim. Praesent maximus hendrerit sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vitae congue dolor. Maecenas ultrices enim at eleifend egestas. Maecenas varius lobortis tellus, molestie rhoncus neque tincidunt et. In fringilla aliquet urna consectetur fringilla. Aliquam erat volutpat. Cras at quam sit amet ex dictum venenatis. Aliquam erat volutpat. Donec auctor varius enim et dignissim. Vestibulum ex ipsum, cursus quis lobortis id, dapibus sit amet metus.',
            organizator: 'organizator',
            subEvents: [{ id: '1', city: 'Kraków', date: '28.07.2024' }, { id: '2', city: 'Warszawa', date: '29.07.2024' }]
        },
        {
            name: 'Deep Purple',
            slug: 'deep-purple',
            image: 'deep-purple.jpg',
            city: 'Kraków, Wrocław',
            date: '12.09.2024 - 13.09.2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus at nunc euismod finibus. Ut ut eleifend eros. In ut ligula diam. Vestibulum sollicitudin, lectus quis tincidunt volutpat, tortor odio bibendum magna, quis egestas est metus at quam. Pellentesque consequat non metus vehicula blandit. Nam vitae faucibus enim. Praesent maximus hendrerit sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vitae congue dolor. Maecenas ultrices enim at eleifend egestas. Maecenas varius lobortis tellus, molestie rhoncus neque tincidunt et. In fringilla aliquet urna consectetur fringilla. Aliquam erat volutpat. Cras at quam sit amet ex dictum venenatis. Aliquam erat volutpat. Donec auctor varius enim et dignissim. Vestibulum ex ipsum, cursus quis lobortis id, dapibus sit amet metus.',
            organizator: 'organizator',
            subEvents: [{ id: '3', city: 'Kraków', date: '12.09.2024' }, { id: '4', city: 'Wrocław', date: '13.09.2024' }]
        },
    ],
    order: {
        name: 'Lenny Kravitz',
        city: 'Kraków',
        date: '12.05.2024',
        image: 'lennykravitz.jpg',
        totalPrice: '170zł',
        items: [{
            section: 'section 1',
            amount: 1,
            totalPrice: '50 zł',
        },
        {
            section: 'section 2',
            amount: 2,
            totalPrice: '120zł',
        }
        ]
    }
}