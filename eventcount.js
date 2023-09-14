function EvenCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        count++;
      }
    }
    console.log("Count is "+count);
  }

  const numbers = [11,45,23,56,12];
  EvenCount(numbers);
