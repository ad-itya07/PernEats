import { useGetUser, useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const {currentUser, isLoading: isGetLoading} = useGetUser(); 
  const {updateUser, isLoading: isUpdateLoading } = useUpdateUser();

  if (isGetLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <div>Unable to load User profile</div>;
  }
  
  return (<UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}/>);
}

export default UserProfilePage;