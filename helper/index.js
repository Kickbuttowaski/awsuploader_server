const streamToString = (stream) =>
    new Promise((resolve, reject) => {
      const chunks = [];
      stream.on("data", (chunk) => chunks.push(chunk));
      stream.on("error", reject);
      stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    });
const getFilename = (fname)=>{
    let extensionIndex = fname.lastIndexOf('.')
    let formattedName = fname.substring(0,extensionIndex)
    const currentdate = new Date()
    var datetime =formattedName +"-"+currentdate.getDate() + "-"
    + (currentdate.getMonth()+1)  + "-" 
    + currentdate.getFullYear() + "@"  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds(); 
    //datetime = datetime + fname(extensionIndex)
    return datetime.substring(0,50) + fname.substring(extensionIndex)
}
module.exports ={streamToString,getFilename}