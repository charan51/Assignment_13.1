function stringUpper(n) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (n instanceof Array) {
                const transArray = n.map(item => item.toUpperCase());
                resolve(transArray);
            } else {
                reject('Please provide array values');
            }
        }, 5000);
    });
};
stringUpper(['hi', 'bangalore', 'a', 'Charan', 'RAJ']).then(res => console.log(res));