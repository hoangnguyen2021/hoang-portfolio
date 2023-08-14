import React from "react";
import {classNames} from "@/utils/utils";
import {Spinner} from "@material-tailwind/react";

type LoadingSpinnerProps = {
    loaded: boolean
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({loaded}) => {
    return (
        <div
            className={classNames("absolute flex justify-center items-center", loaded ? "invisible" : "visible")}>
            <Spinner className="h-8 w-8"/>
        </div>
    );
};

export default LoadingSpinner;