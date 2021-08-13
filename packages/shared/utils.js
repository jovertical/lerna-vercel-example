/**
 * Sleep for a given milliseconds
 *
 * @param  {number|undefined} ms
 * @return {Promise}
 */
export function sleep(ms = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}