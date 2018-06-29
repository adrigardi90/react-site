import { environment } from './../environments/environment';
const isBrowser = require('is-browser')

const headers = isBrowser ? new Headers({ 'Content-Type': 'application/json' }):{};

const post = (data: object): Promise<{}> => (
    fetch(environment.API, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    })
);

async function sendEmail(data: {}): Promise<{}> {
    try {
        const res: any = await post(data)
        return res.status;
    } catch (error) {
        return error;
    }
}

export const email = sendEmail;