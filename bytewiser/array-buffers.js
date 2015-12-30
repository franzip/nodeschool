var integer = process.argv[2],
    buffer  = new ArrayBuffer(4),
    u32     = new Uint32Array(buffer),
    u16     = new Uint16Array(buffer);

u32[0] = integer;
u16[0] = integer;

//console.log(buffer.byteLength) => 4;
//console.log(ArrayBuffer.isView(u32)) => true;
//console.log(ArrayBuffer.isView(u16)) => true;
//console.log(JSON.stringify(u32));
console.log(JSON.stringify(u16));
