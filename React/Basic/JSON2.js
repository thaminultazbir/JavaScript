let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';


const obj = JSON.parse(text);
//console.log(obj)

const textData = obj.map((abc)=>{
    return Object.entries(abc).map(([key, value])=>`${key}:${}`)
})