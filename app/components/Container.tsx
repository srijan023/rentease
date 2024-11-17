interface ContainerProps {
  children: React.ReactNode;
  classes?: string;
}

export default function Container(props: ContainerProps) {
  return (
    <div className={`w-full`}>
      <div className={`w-9/12 mx-auto ${props.classes}`}>{props.children}</div>
    </div>
  );
}
