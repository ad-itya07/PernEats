import { useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const {updateUser, isLoading } = useUpdateUser();

  return (<UserProfileForm onSave={updateUser} isLoading={isLoading}/>);
}

export default UserProfilePage;