export default async function delay(time: number = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('');
        }, time);
    });
}
