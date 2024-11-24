interface ContainerProps {
  children: React.ReactNode;
  classes?: string;
}

export default function UnprotectedContainer(props: ContainerProps) {
  return (
    <div className={`w-full bg-white`}>
      <div className={`mx-auto ${props.classes}`}>{props.children}</div>
    </div>
  );
}
