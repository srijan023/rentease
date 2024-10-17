interface DescriptionProps {
  description: string;
  classes?: string;
}

export default function Description({
  description,
  classes = "",
}: DescriptionProps) {
  return (
    <p className={`mx-auto text-center max-w-md text-gray-500 ${classes}`}>
      {description}
    </p>
  );
}
