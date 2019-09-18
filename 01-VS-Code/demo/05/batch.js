var fs = require('fs')
// 我img下目录的命名00~39
// startNum: [0,39]
// endNum:  [0,40]
function mkdir(startNum, endNum) {
    for (let i = startNum; i < endNum; i++) {
        if (i == 10 || i > 10) {
            if (!fs.existsSync(`${i}`)) {
                fs.mkdir(`${i}`, (error) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('ok');
                    }

                });
            }
        } else {
            if (!fs.existsSync(`0${i}`)) {
                fs.mkdir(`0${i}`, (error) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('ok');
                    }

                });
            }
        }

    }
}

mkdir(0, 40)

// 如果能在执行这个js文件的时候，可以在命令行中输入0和40这两个参数就好，
// 我觉得是有方案可以做的，不过目前我还是暂停一下好了！