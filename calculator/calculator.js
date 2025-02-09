let v = document.getElementById("screen")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let add = document.getElementById("add")
let clearall = document.getElementById("clearall")
let equal = document.getElementById("equal")
let point = document.getElementById("point")
let zero2 = document.getElementById("zero2")
let sub = document.getElementById("sub")
let multi = document.getElementById("multi")
let one_by_x = document.getElementById("one_by_x")
let square = document.getElementById("square")
let root = document.getElementById("root")
let div = document.getElementById("div")
let reload = document.getElementById("reload")
let per = document.getElementById("per")
let back = document.getElementById("back")
// v.style.fontSize = "x-large"

new Promise((resolve, reject) => {
    setTimeout(() => {
        v.innerHTML = "wait"
    }, 1);
    setTimeout(() => {
        v.innerHTML = "Hello i am calc which work without api integration lets start"
        let mypro = new Promise((resolve, reject) => {
            setTimeout(() => {
                v.innerHTML = " "
                // v.style.fontSize = "xx-large"
                v.style.justifyContent = "end"
                v.style.alignItems = "end"
                work()
            }, 3000);
        })
    }, 5000);
})

function work() {
    one.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "1")
    }
    )

    two.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "2")
    }
    )

    add.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "+")
    }
    )

    equal.addEventListener("click", () => {
        let answer = eval(v.innerHTML)
        v.innerHTML = answer
    }
    )

    clearall.addEventListener("click", () => {
        v.innerHTML = " "
    }
    )

    three.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "3")
    }
    )

    four.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "4")
    }
    )

    five.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "5")
    }
    )

    six.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "6")
    }
    )

    seven.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "7")
    }
    )

    eight.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "8")
    }
    )

    nine.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "9")
    }
    )

    zero.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "0")
    }
    )

    point.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", ".")
    }
    )
    
    zero2.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "00")
    }
    )

    sub.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "-")
    }
    )

    multi.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "*")
    }
    )

    one_by_x.addEventListener("click", () => {
        let aws = eval(1/v.innerHTML)
        v.innerHTML = aws
    }
    )

    square.addEventListener("click", () => {
        let aws1 = eval(v.innerHTML**2)
        v.innerHTML = aws1
    }
    )

    root.addEventListener("click", () => {
        let aws1 = eval(v.innerHTML**(1/2))
        v.innerHTML = aws1
    }
    )

    div.addEventListener("click", () => {
        v.insertAdjacentHTML("beforeend", "/")
    }
    )

    reload.addEventListener("click", () => {
        document.location.reload()
    }
    )

    per.addEventListener("click", () => {
        let aws2 = eval(v.innerHTML/100)
        v.innerHTML = aws2
    }
    )

    back.addEventListener("click", () => {
        v.innerHTML = v.innerHTML.slice(0,-1) 
    }
    )

}
