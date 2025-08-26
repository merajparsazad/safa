function UserAvatar() {
  return (
    <div className="flex min-w-40 items-center gap-4 text-xl font-medium text-gray-600">
      <img
        src={null}
        // alt={`Avatar of ${fullname}`}
        alt=""
        className="block aspect-square w-14 rounded-[50%] object-cover object-center outline-2 outline-gray-100"
      />
      <span className="text-nowrap">Full Name</span>
    </div>
  );
}

export default UserAvatar;
