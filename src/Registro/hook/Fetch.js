
const Fetch=(url, method)=>{
    async function Res(){
        try{
            const response= await fetch(`http://localhost:8083/WebApplication3/api`+url,{method: method});
            const result=await response.json();
            return await result;
        }catch(e){
            console.log(e)
        }
    }
    return Res();
};
export default Fetch;