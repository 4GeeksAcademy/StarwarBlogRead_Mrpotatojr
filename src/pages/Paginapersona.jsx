import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Peopledetails } from "../components/peopledetails.jsx";

export const Paginapersona = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <>
        <Peopledetails/>
        </>
    );
}; 