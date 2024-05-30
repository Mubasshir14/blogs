import { ScaleLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-117px)]">
            <ScaleLoader size={100} color='#F92FD3'></ScaleLoader>
        </div>
    );
};

export default Loader;