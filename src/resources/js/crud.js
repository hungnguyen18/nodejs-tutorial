const { JSDOM } = require('jsdom');
const { window } = new JSDOM('');
const $ = require('jquery')(window);

$('#test').click(() => {
    alert('click');
});
