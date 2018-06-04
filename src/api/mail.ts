import { environment } from './../environments/environment';

const headers = new Headers({ 'Content-Type': 'application/json' });

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