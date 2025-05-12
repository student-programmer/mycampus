export const generateAvatar = (firstName?: string, lastName?: string) => {
    const initials = `${ firstName?.[0] ?? '?' }${ lastName?.[0] ?? '?' }`.toUpperCase();
    const bgColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="358" height="374">
            <rect width="358" height="374" fill="${ bgColor }" rx="20"/>
            <text x="50%" y="50%" font-size="100" font-family="Arial" dy=".3em" fill="white" text-anchor="middle">${ initials }</text>
        </svg>
    `;

    const blob = new Blob([svg], { type: 'image/svg+xml' });
    return URL.createObjectURL(blob);
};


export const isEmpty = (obj: object) => {
    return obj && Object.keys(obj).length === 0 || false;
}

export const CurrentDate = () => {
    return new Date().toISOString().split('T')[0];
}


