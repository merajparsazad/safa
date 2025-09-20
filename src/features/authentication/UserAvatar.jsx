import { useAuth } from "./AuthContext";

function UserAvatar() {
  const { user } = useAuth();
  const {fullName, avatar} = user

  return (
    <div className="flex min-w-40 items-center gap-4 text-xl font-medium text-gray-600">
      <img
        src={avatar || "/avatar-images/default-user.jpg"}
        alt={`Avatar of ${fullName}`}
        className="block aspect-square w-14 rounded-[50%] object-cover object-center outline-2 outline-gray-100"
      />
      <span className="text-nowrap">{fullName}</span>
    </div>
  );
}

export default UserAvatar;
