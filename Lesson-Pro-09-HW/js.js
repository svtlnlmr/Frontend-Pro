function creativeTask() {
    const object = {
        a: 5,
        b: { g: 8, y: 9, t: { q: 48 } },
        x: 47
    }
    let newObject = JSON.parse(JSON.stringify(object));
    newObject.b.g = 'true';

    console.log(object);
    console.log(newObject);
}