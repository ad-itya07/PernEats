import { useCreateRestaurant, useGetRestaurant } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading} = useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  
  return (
    <ManageRestaurantForm restaurant={restaurant} onSave={createRestaurant} isLoading={isLoading}/>
  )
}

export default ManageRestaurantPage;