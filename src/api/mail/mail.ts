const headers = new Headers({ 'Content-Type': 'application/json' });

const post = (data: object) : Promise<{}> => (
    fetch('http://localhost:3000/api/sendEmail', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        })
);

async function sendEmail(data: {}){

    try {
        const res = await post(data)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
        
}

export const email = sendEmail;