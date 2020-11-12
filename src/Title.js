// Example of exporting a function from another file.  We will put export default Title; Then import to the file that you want it to appear

function Title({titleText}) {
    return (
        <h1>{titleText}</h1>
    );
}



export default Title;