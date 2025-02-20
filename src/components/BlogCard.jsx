import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";
import { deleteBlog } from "../utils";


const BlogCard = ({ blog, deletable, handleDelete}) => {
    const { cover_image, readable_publish_date, description, title, id } = blog;

    return (
        <div className="flex relative ">
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(readable_publish_date).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {
                deletable && (<div onClick={() => handleDelete(id)} className="absolute bg-primary rounded-full p-3 -top-4 left-10
                 hover:cursor-pointer hover:scale-105"> <MdDeleteForever size={20} className="text-2xl text-secondary font font-extrabold"></MdDeleteForever> </div>)
            }
        </div>
    );
};

export default BlogCard;