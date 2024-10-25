export default function Avatar({ image }: { image: string }) {
  return <div className="px-6 text-white py-4 rounded-full bg-gray-500">
    {!image && "A"}
    {image && <img src={image} />}
  </div>
}
