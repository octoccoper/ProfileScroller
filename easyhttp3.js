/**
 * EasyHTTP2 Library
 * Cool library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Kate Lo
 * @license MIT
 *
 **/

class EasyHTTP {

    // Make an HTTP GET Request 
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
}