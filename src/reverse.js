const reverse = (string) => {
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) result += string[i];
    return result;
}

console.log(reverse("string"));
console.log(reverse("reverse"));
console.log(reverse("diff"));
