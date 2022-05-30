import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="my-14 md:mt-0 lg:w-5/12 md:w-1/2 w-3/4 border-2 border-red-700 px-5 py-8 mx-auto">
            <h2 className="text-center">Add Review Here</h2>
        </div>
    );
};

export default AddReview;
