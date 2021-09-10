const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function replaceArray(arr = [], items = [], story = '') {
    arr.forEach((a, index) => {
        story = story.replace(a, items[index]);
    });
    return story;
}

function result() {
    let newStory = storyText;
    const ukItems = [];
    const arr = ['94 fahrenheit', '300 pounds'];

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    const name = customName !== ''
        ? newStory = newStory.replace('Bob', customName.value) : '';

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.0714286) + ' stone';
        const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        ukItems.push(weight, temperature);
        newStory = replaceArray(arr, ukItems, newStory);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
