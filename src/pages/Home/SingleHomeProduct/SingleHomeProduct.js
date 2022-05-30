import { useNavigate } from "react-router-dom";

const SingleHomeProduct = ({ data }) => {
    const navigate = useNavigate();
    const {
        _id,
        name,
        category,
        model,
        imageUrl,
        price,
        stock,
        minOrder,
        description,
    } = data;

    const orderProduct = (_id) => {
        navigate(`/order/${_id}`);
    };
    return (
        <div className="p-4 border-2 border-red-700 my-5 w-auto">
            <div className="w-fit mx-auto my-3">
                <img
                    className="h-[150px] w-[150px] border-2 border-red-700"
                    src={imageUrl}
                    alt=""
                />
            </div>
            <p className="text-left text-sm font-semibold">
                Product name: {name}
            </p>
            <p className="text-left text-sm font-semibold">
                Product model: {model}
            </p>
            <p className="text-left text-sm font-semibold">
                Product category: {category}
            </p>
            <p className="text-left text-sm font-semibold">
                Price/unit: {price}$
            </p>
            <p className="text-left text-sm font-semibold">Stock: {stock}</p>
            <p className="text-left text-sm font-semibold">
                Minimum order quantity: {minOrder}
            </p>
            <p className="text-left text-sm font-semibold mt-4 mb-3">
                {description}
            </p>

            <div>
                <button
                    onClick={() => orderProduct(_id)}
                    className="w-56 h-[40px] bg-red-700 rounded-md hover:font-bold block my-2 md:my-5 mx-auto text-white"
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default SingleHomeProduct;
