//Blob - Binary Large Object

//Creating BLOB object
/* const blobObj = new Blob(["Hello World!"], {type: "text/plain"});
console.log(blobObj); */

//Get link from BLOB object

/* const blobObj = new Blob(["Hello World!"], {type: "text/plain"});
const url = URL.createObjectURL(blobObj);
console.log(url); */

//Reading BLOB URL
/* const blobObj = new Blob(["Hello World!"], { type: "text/plain" });
const url = URL.createObjectURL(blobObj);

const reader = new FileReader();

reader.onload = (event) => {
    console.log(event.target.result);
}

reader.readAsText(url); */
