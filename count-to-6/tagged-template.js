var name = process.argv[2],
    msg  = process.argv[3];

console.log(html`<b>${name} says</b>: "${msg}"`);

function html(tokens, ...args) {
    var result = tokens[0];

    args.forEach((sub, i) => {
        result += escape(sub) + tokens[i + 1];
    });

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}
