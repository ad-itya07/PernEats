import { Order } from "@/types/orderCheckoutTypes";
import { Restaurant } from "@/types/restaurantType";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurantOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/restaurant/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }

    return response.json();
  };

  const { data: orders, isLoading } = useQuery(
    "fetchMyRestaurantOrders",
    getMyRestaurantOrdersRequest
  );

  return { orders, isLoading };
};

export const useCreateRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createRestaurantRequest = async (
    restaurantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/restaurant/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create restaurant");
    }

    return response.json();
  };

  const {
    mutate: createRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createRestaurantRequest);

  if (isSuccess) {
    toast.success("Restaurant created!");
  }

  if (error) {
    toast.error("Unable to update restaurant");
  }

  return { createRestaurant, isLoading };
};

export const useGetRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getRestaurantRequest = async () : Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  }

  const {
    data: restaurant,
    isLoading,
  } = useQuery("getRestaurant", getRestaurantRequest)

  return {
    restaurant,
    isLoading,
  }
}

export const useUpdateRestaurant = () => {
  const {getAccessTokenSilently} = useAuth0();

  const updateRestaurantRequest = async (restaurantFormData: FormData) : Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/restaurant/update`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    }); 

    if (!response.ok) {
      throw new Error("Failed to update restaurant");
    }

    return response.json();
  }

  const {
    mutate: updateRestaurant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(updateRestaurantRequest);

  if (isSuccess) {
    toast.success("Restaurant updated!");
  }

  if (error) {
    toast.error("Unable to update restaurant");
  }

  return {updateRestaurant, isLoading};
}

type UpdateOrderStatusRequest = {
  orderId: string;
  status: string;
};

export const useUpdateMyRestaurantOrder = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantOrder = async (
    updateStatusOrderRequest: UpdateOrderStatusRequest
  ) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/order/${updateStatusOrderRequest.orderId}/status`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updateStatusOrderRequest.status }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update status");
    }

    return response.json();
  };

  const {
    mutateAsync: updateRestaurantStatus,
    isLoading,
    isError,
    isSuccess,
    reset,
  } = useMutation(updateMyRestaurantOrder);

  if (isSuccess) {
    toast.success("Order updated");
  }

  if (isError) {
    toast.error("Unable to update order");
    reset();
  }

  return { updateRestaurantStatus, isLoading };
};