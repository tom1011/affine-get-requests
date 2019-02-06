console.log('client.js has been loaded');

$(document).ready(onReady);

function onReady() {
    //$('#submitButton').on('click', submitButtonFunction);
    $('#quoteTable').append(`
    <td>Remember there's no such thing as a small act of kindness. Every act creates a ripple with no
    logical
    end.</td>
    <td>Scott Adams</td>
    `)  
}

// function submitButtonFunction() {

//     let quotes = $('#quoteInput').val()
//     console.log(quotes);
//     $('#quoteTable').append(`
//     <td>
//     sometest text
//     </td>
//     `
//     )}