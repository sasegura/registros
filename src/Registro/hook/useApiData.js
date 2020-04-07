import useFetch from "./useFetch";
const useApiData=async (urlApi)=>{
    var url=`http://localhost:8083/WebApplication3/api${urlApi}`;
    const data=await useFetch(url);
    return await data;
}
export default useApiData;