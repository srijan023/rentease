export default function CapsuleUserDetails({ userName }: { userName: string }) {
  return (
    <div className="text-center">
      <h2 className="font-semibold">{userName}</h2>
      <p className="text-gray-600">Property name</p>
    </div>
  )
}
