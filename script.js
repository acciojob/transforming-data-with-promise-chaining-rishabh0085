//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
    // Step 1: Create a promise that resolves after 2 seconds with the number from the input
    const step1Promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = document.getElementById('ip').value;
            resolve(number);
        }, 2000);
    });

    // Step 2: Print the initial number
    step1Promise.then(number => {
        document.getElementById('output').innerText = `Result: ${number}`;
        return number;
    })
    // Step 3: Multiply the number by 2 and resolve after 1 second
    .then(number => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = number * 2;
                document.getElementById('output').innerText = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Step 4: Subtract 3 from the number and resolve after 1 second
    .then(number => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = number - 3;
                document.getElementById('output').innerText = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Step 5: Divide the number by 2 and resolve after 1 second
    .then(number => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = number / 2;
                document.getElementById('output').innerText = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Step 6: Add 10 to the number and resolve after 1 second
    .then(number => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = number + 10;
                document.getElementById('output').innerText = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Step 7: Print the final result
    .then(finalResult => {
        document.getElementById('output').innerText = `Final Result: ${finalResult}`;
    });
});
