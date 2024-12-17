import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as apiClient from "../apis/user.api";
import { UserProfileFormData } from "../types/user.type";
import { Button } from "antd";

const InformationChange = () => {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserProfileFormData>();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await apiClient.fetchCurrentUser();
        setValue("fullname", user.fullname);
        setValue("email", user.email);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [setValue]);

  const onSubmit = async (data: UserProfileFormData) => {
    try {
      await apiClient.updateUserProfile(data);
      setIsEditing(false);
    } catch (error) {
        console.error("Failed to update user profile:", error);
    }
  };

  return (
    <div
      className="bg-white shadow sm:rounded-lg flex flex-col w-full"
      style={{ fontFamily: "Montserrat" }}
    >
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-xl leading-6 font-medium text-gray-900">
          Personal details
        </h3>
        <p className="mt-1 max-w-2xl text-gray-500">
          Keep your details current to ensure seamless communication and
          services
        </p>
      </div>
      <div className="border-t border-gray-200">
        <div className="flex flex-row items-center px-4 py-4 sm:px-6">
          <label className="text-gray-700 text-sm font-bold mr-2 min-w-20">
            Full Name
          </label>
          <input
            className={`rounded bg-white w-full py-1 px-2 font-normal ${
              isEditing ? " border-mint border" : ""
            }`}
            type="text"
            {...register("fullname", {
              required: "This field is required",
            })}
            disabled={!isEditing}
          />
        </div>
        {errors.fullname && (
          <span
            style={{ fontSize: "14px" }}
            className="text-red-500 font-normal"
          >
            {errors.fullname.message}
          </span>
        )}
        <div className="flex flex-row items-center px-4 py-4 sm:px-6">
          <label className="text-gray-700 text-sm font-bold mr-2 min-w-20">
            Email
          </label>
          <input
            className="bg-white rounded w-full py-1 px-2 font-normal"
            type="text"
            {...register("email", {
              required: "This field is required",
            })}
            disabled
          />
        </div>
        {errors.email && (
          <span
            style={{ fontSize: "14px" }}
            className="text-red-500 font-normal"
          >
            {errors.email.message}
          </span>
        )}
        <div className="flex justify-between px-4 py-3 bg-gray-50 text-right sm:px-6">
          {isEditing ? (
            <>
              <Button
                type="primary"
                className="bg-mint text-black font-semibold"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                className="bg-mint text-black font-semibold"
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </Button>
            </>
          ) : (
            <Button
              type="primary"
              className="bg-mint text-black font-semibold"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default InformationChange;
