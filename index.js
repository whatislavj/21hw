// task1
function fiboLength(length) {
    if (length <= 0) {
      console.log("Lungimea trebuie să fie mai mare decât 0.");
      return;
    }
  
    let fiboArray = [0, 1];
  
    if (length === 1) {
      console.log(fiboArray[0]);
    } else {
      console.log(fiboArray[0]);
      console.log(fiboArray[1]);
    }
  
    for (let i = 2; i < length; i++) {
      fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
      console.log(fiboArray[i]);
    }
}
  
fiboLength(10);


// task2
function showProperty(property) {
    console.log(this[property]);
  }
  
  const object1 = { nume: "Xenia", varsta: 25 };
  const object2 = { nume: "Victor", varsta: 30 };
  const object3 = { nume: "Iulian", varsta: 35 };
  
  showProperty.call(object2, 'nume');
  
  showProperty.apply(object3, ['varsta']);
  
  const showPropertyobject1 = showProperty.bind(object1);
  showPropertyobject1('nume');
  